import React from 'react';
import { Redirect } from 'react-router-dom';
import { FuseUtils } from '@fuse/index';
import { appsConfigs } from 'app/main/apps/appsConfigs';
import { pagesConfigs } from 'app/main/pages/pagesConfigs';
import { authRoleExamplesConfigs } from 'app/main/auth/authRoleExamplesConfigs';
import { UserInterfaceConfig } from 'app/main/user-interface/UserInterfaceConfig';
//import {DocumentationConfig} from 'app/main/documentation/DocumentationConfig';
import { LoginConfig } from 'app/main/login/LoginConfig';
import { RegisterConfig } from 'app/main/register/RegisterConfig';
import { LogoutConfig } from 'app/main/logout/LogoutConfig';
import { CallbackConfig } from 'app/main/callback/CallbackConfig';


// Elimino documntacion
const routeConfigs = [
    ...appsConfigs,
    ...pagesConfigs,
    ...authRoleExamplesConfigs,
    UserInterfaceConfig,
    LogoutConfig,
    LoginConfig,
    RegisterConfig,
    LogoutConfig,
    CallbackConfig
];

const routes = [
    //if you want to make whole app auth protected by default change defaultAuth for example:
    // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
    // The individual route configs which has auth option won't be overridden.
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin', 'staff', 'user1', 'user2', 'user']),
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/apps/dashboards/analytics" />
    },
    {
        component: () => <Redirect to="/pages/errors/error-404" />
    }
];

export default routes;
