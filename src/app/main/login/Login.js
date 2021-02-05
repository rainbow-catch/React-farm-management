import React, { useState } from 'react'
import { Card, CardContent, Typography, Tabs, Tab } from '@material-ui/core';
import { darken } from '@material-ui/core/styles/colorManipulator';
import { FuseAnimate } from '@fuse';
//import { Link } from 'react-router-dom';
import clsx from 'clsx';
//mport JWTLoginTab from './tabs/JWTLoginTab';
import FirebaseLoginTab from './tabs/FirebaseLoginTab';
//import Auth0LoginTab from './tabs/Auth0LoginTab';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color: theme.palette.primary.contrastText
    }
}));

function Login() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    function handleTabChange(event, value) {
        setSelectedTab(value);
    }

    return (
        <div className={clsx(classes.root, "flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")}>
                
           

            <div className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left">
            
            <FuseAnimate animation="transition.expandIn">
                    <img className="w-128 mb-32" src="assets/images/logos/KOSMO_SAT3.svg" alt="logo" />
            </FuseAnimate>
                
               

                <FuseAnimate animation="transition.slideUpIn" delay={300}>
                    <Typography variant="h3" color="inherit" className="font-light">
                        Bem-vindo KOSMO-SAT!
                    </Typography>
                </FuseAnimate>

                <FuseAnimate delay={400}>
                    <Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
                        
                        Mudar o mundo, amigo Sancho, não é loucura ou utopia, é justiça ...
                    </Typography>
                </FuseAnimate>
            </div>

            <FuseAnimate animation={{ translateX: [0, '100%'] }}>

                <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                    <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                    <div className="logo">
                            <img
                                src="assets/images/logos/KOSMO_SAT2.svg"
                                
                                style={{
                                    maxWidth: '640px',
                                    width   : '100%'
                                }}
                            />
                            
                        </div>

                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            variant="fullWidth"
                            className="w-full mb-32"
                        >
                            <Tab
                                icon={<img className="h-40 p-4 bg-black rounded-12" src="assets/images/logos/jwt.svg" alt="firebase" />}
                                className="min-w-0"
                                label="DEMO"
                            />
                            <Tab
                                icon={<img className="h-40" src="assets/images/logos/firebase.svg" alt="firebase" />}
                                className="min-w-0"
                                label="PARTNER"
                            />
                            <Tab
                                icon={<img className="h-40" src="assets/images/logos/auth0.svg" alt="auth0" />}
                                className="min-w-0"
                                label="USER"
                            />
                        </Tabs>

                        {selectedTab === 0 && <FirebaseLoginTab />}
                        {selectedTab === 1 && <FirebaseLoginTab />}
                        {selectedTab === 2 && <FirebaseLoginTab />}

                        <div className="flex flex-col items-center justify-center pt-32">
                            <span className="font-medium">Você não possui uma conta?</span>
                            <span className="font-medium">Entre em contato com seu provedor!</span>
                            
                            
                        </div>



                    </CardContent>
                </Card>
            </FuseAnimate>
        </div>
    )
}

export default Login;
