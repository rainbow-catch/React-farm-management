import React, {useEffect, useState} from 'react';
import {Collapse, Icon, IconButton, ListItem, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseUtils, NavLinkAdapter} from '@fuse';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import FuseNavVerticalGroup from './FuseNavVerticalGroup';
import FuseNavVerticalItem from './FuseNavVerticalItem';
import FuseNavBadge from './../FuseNavBadge';
import FuseNavVerticalLink from './FuseNavVerticalLink';

const useStyles = makeStyles(theme => ({
    root: {
        padding : 0,
        '&.open': {
            backgroundColor: 'rgba(0,0,0,.08)'
        }
    },
    item: {
        height                             : 40,
        width                              : 'calc(100% - 16px)',
        borderRadius                       : '0 20px 20px 0',
        paddingRight                       : 12,
        color                              : theme.palette.text.primary,
        '&.active > .list-item-text > span': {
            fontWeight: 600
        }
    }
}));

function needsToBeOpened(location, item)
{
    return location && isUrlInChildren(item, location.pathname)
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

function FuseNavVerticalCollapse(props)
{
    const userRole = useSelector(({auth}) => auth.user.role);

    const classes = useStyles(props);
    const [open, setOpen] = useState(() => needsToBeOpened(props.location, props.item));
    const {item, nestedLevel} = props;
    let paddingValue = 40 + (nestedLevel * 16);
    const listItemPadding = nestedLevel > 0 ? 'pl-' + (paddingValue > 80 ? 80 : paddingValue) : 'pl-24';

    useEffect(() => {
        if ( needsToBeOpened(props.location, props.item) )
        {
            setOpen(true);
        }
    }, [props.location, props.item]);

    function handleClick()
    {
        setOpen(!open);
    }

    if ( !FuseUtils.hasPermission(item.auth, userRole) )
    {
        return null;
    }

    return (
        <ul className={clsx(classes.root, open && "open")}>

            <ListItem
                button
                className={clsx(classes.item, listItemPadding, 'list-item')}
                onClick={handleClick}
                component={item.url ? NavLinkAdapter : 'li'}
                to={item.url}
                role="button"
            >
                {item.icon && (
                    <Icon color="action" className="text-16 flex-shrink-0 mr-16">{item.icon}</Icon>
                )}
                <ListItemText className="list-item-text" primary={item.title} classes={{primary: 'text-14'}}/>
                {item.badge && (
                    <FuseNavBadge className="mr-4" badge={item.badge}/>
                )}
                <IconButton disableRipple className="w-40 h-40 -mr-12 p-0 focus:bg-transparent hover:bg-transparent" onClick={ev => ev.preventDefault()}>
                    <Icon className="text-16 arrow-icon" color="inherit">
                        {open ? 'expand_less' : 'expand_more'}
                    </Icon>
                </IconButton>
            </ListItem>

            {item.children && (
                <Collapse in={open} className="collapse-children">
                    {
                        item.children.map((item) => (

                            <React.Fragment key={item.id}>

                                {item.type === 'group' && (
                                    <FuseNavVerticalGroup item={item} nestedLevel={nestedLevel + 1}/>
                                )}

                                {item.type === 'collapse' && (
                                    <NavVerticalCollapse item={item} nestedLevel={nestedLevel + 1}/>
                                )}

                                {item.type === 'item' && (
                                    <FuseNavVerticalItem item={item} nestedLevel={nestedLevel + 1}/>
                                )}

                                {item.type === 'link' && (
                                    <FuseNavVerticalLink item={item} nestedLevel={nestedLevel + 1}/>
                                )}

                            </React.Fragment>
                        ))
                    }
                </Collapse>
            )}
        </ul>
    );
}

FuseNavVerticalCollapse.propTypes = {
    item: PropTypes.shape(
        {
            id      : PropTypes.string.isRequired,
            title   : PropTypes.string,
            icon    : PropTypes.string,
            children: PropTypes.array
        })
};
FuseNavVerticalCollapse.defaultProps = {};

const NavVerticalCollapse = withRouter(React.memo(FuseNavVerticalCollapse));

export default NavVerticalCollapse;
