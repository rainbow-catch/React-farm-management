import React from 'react';
import {AppBar, Hidden, Toolbar} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import {FuseSearch, FuseShortcuts} from '@fuse';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
//import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
//import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/chatPanel/ChatPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import {useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
}));

function ToolbarLayout1(props)
{
    const config = useSelector(({fuse}) => fuse.settings.current.layout.config);
    const toolbarTheme = useSelector(({fuse}) => fuse.settings.toolbarTheme);

    const classes = useStyles(props);

    return (
        <ThemeProvider theme={toolbarTheme}>
            <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="p-0">

                    {config.navbar.display && config.navbar.position === 'left' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-64 h-64 p-0"/>
                            <div className={classes.separator}/>
                        </Hidden>
                    )}

                    <div className="flex flex-1">
                        <Hidden mdDown>
                            <FuseShortcuts className="px-16"/>
                        </Hidden>
                    </div>

                    <div className="flex">

                        <UserMenu/>

                        <div className={classes.separator}/>

                        <FuseSearch/>

                        <Hidden lgUp>

                            <div className={classes.separator}/>

                            
                        </Hidden>

                        <div className={classes.separator}/>

                        
                    </div>

                    {config.navbar.display && config.navbar.position === 'right' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton/>
                        </Hidden>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default ToolbarLayout1;
