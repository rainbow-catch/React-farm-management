import React, {useState} from 'react';
import {Grow, Paper, Icon, IconButton, ListItem, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseUtils, NavLinkAdapter} from '@fuse';
import {useDebounce} from '@fuse/hooks';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Manager, Reference, Popper} from 'react-popper';
import * as ReactDOM from 'react-dom';
import FuseNavHorizontalCollapse from './FuseNavHorizontalCollapse';
import FuseNavHorizontalItem from './FuseNavHorizontalItem';
import FuseNavHorizontalLink from './FuseNavHorizontalLink';

const useStyles = makeStyles(theme => ({
    root       : {
        color                                     : theme.palette.text.primary,
        '&.active, &.active:hover, &.active:focus': {
            backgroundColor            : theme.palette.secondary.main + '!important',
            color                      : theme.palette.secondary.contrastText + '!important',
            '& .list-item-text-primary': {
                color: 'inherit'
            },
            '& .list-item-icon'        : {
                color: 'inherit'
            }
        },
        '& .list-item-text'                       : {
            padding: '0 0 0 16px'
        },
        '&.level-0'                               : {
            height      : 44,
            borderRadius: 4,
            '&:hover'   : {
                background: 'transparent'
            },
        },
    },
    children   : {},
    popper     : {
        zIndex: 999
    },
    popperClose: {
        pointerEvents: 'none'
    }
}));

function FuseNavHorizontalGroup(props)
{
    const userRole = useSelector(({auth}) => auth.user.role);

    const classes = useStyles(props);
    const [opened, setOpened] = useState(false);
    const {item, nestedLevel, dense} = props;

    const handleToggle = useDebounce((open) => {
        setOpened(open);
    }, 150);

    if ( !FuseUtils.hasPermission(item.auth, userRole) )
    {
        return null;
    }

    function isUrlInChildren(parent, url)
    {
        if ( !parent.children )
        {
            return false;
        }

        for ( let i = 0; i < parent.children.length; i++ )
        {
            if ( parent.children[i].children )
            {
                if ( isUrlInChildren(parent.children[i], url) )
                {
                    return true;
                }
            }

            if ( parent.children[i].url === url || url.includes(parent.children[i].url) )
            {
                return true;
            }
        }

        return false;
    }

    return (
        <Manager>
            <Reference>
                {({ref}) => (
                    <div ref={ref}>
                        <ListItem
                            button
                            className={clsx("list-item ", classes.root, "relative", "level-" + nestedLevel, isUrlInChildren(item, props.location.pathname) && "active")}
                            onMouseEnter={() => handleToggle(true)}
                            onMouseLeave={() => handleToggle(false)}
                            aria-owns={opened ? 'menu-list-grow' : null}
                            aria-haspopup="true"
                            component={item.url ? NavLinkAdapter : 'li'}
                            to={item.url}
                            role="button"
                        >
                            {item.icon && (
                                <Icon color="action" className="list-item-icon text-16 flex-shrink-0">{item.icon}</Icon>
                            )}
                            <ListItemText className="list-item-text" primary={item.title} classes={{primary: 'text-14'}}/>
                            {nestedLevel > 0 && (
                                <IconButton disableRipple className="w-16 h-16 ml-4 p-0">
                                    <Icon className="text-16 arrow-icon">keyboard_arrow_right</Icon>
                                </IconButton>
                            )}
                        </ListItem>
                    </div>
                )}
            </Reference>
            {ReactDOM.createPortal(
                <Popper
                    placement={nestedLevel === 0 ? "bottom-start" : "right"}
                    eventsEnabled={opened}
                    positionFixed
                >
                    {({ref, style, placement, arrowProps}) => (
                        opened && (
                            <div
                                ref={ref}
                                style={{
                                    ...style,
                                    zIndex: 999 + nestedLevel
                                }}
                                data-placement={placement}
                                className={clsx(classes.popper, {[classes.popperClose]: !opened})}
                            >
                                <Grow in={opened} id="menu-list-grow" style={{transformOrigin: '0 0 0'}}>
                                    <Paper
                                        onMouseEnter={() => handleToggle(true)}
                                        onMouseLeave={() => handleToggle(false)}
                                    >
                                        {item.children && (
                                            <ul className={clsx(classes.children, "popper-navigation-list", dense && "dense", "pl-0")}>
                                                {
                                                    item.children.map((item) => (
                                                        <React.Fragment key={item.id}>

                                                            {item.type === 'group' && (
                                                                <NavHorizontalGroup item={item} nestedLevel={nestedLevel} dense={dense}/>
                                                            )}

                                                            {item.type === 'collapse' && (
                                                                <FuseNavHorizontalCollapse item={item} nestedLevel={nestedLevel} dense={dense}/>
                                                            )}

                                                            {item.type === 'item' && (
                                                                <FuseNavHorizontalItem item={item} nestedLevel={nestedLevel} dense={dense}/>
                                                            )}

                                                            {item.type === 'link' && (
                                                                <FuseNavHorizontalLink item={item} nestedLevel={nestedLevel} dense={dense}/>
                                                            )}
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </ul>
                                        )}
                                    </Paper>
                                </Grow>
                            </div>
                        )
                    )}
                </Popper>,
                document.querySelector('#root')
            )}
        </Manager>
    );
}

FuseNavHorizontalGroup.propTypes = {
    item: PropTypes.shape(
        {
            id      : PropTypes.string.isRequired,
            title   : PropTypes.string,
            children: PropTypes.array
        })
};

FuseNavHorizontalGroup.defaultProps = {};

const NavHorizontalGroup = withRouter(React.memo(FuseNavHorizontalGroup));

export default NavHorizontalGroup;
