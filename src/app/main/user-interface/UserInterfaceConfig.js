import React from 'react';
import { cardedLayoutRoutes } from './page-layouts/carded/cardedLayoutRoutes';
import { simpleLayoutRoutes } from './page-layouts/simple/simpleLayoutRoutes';
import { cropsLayoutRoute } from './page-layouts/crops/cropsLayoutRoute';


export const UserInterfaceConfig = {

    routes: [
        ...cardedLayoutRoutes,
        ...simpleLayoutRoutes,
        ...cropsLayoutRoute,
        {
            path: '/ui/page-layouts/blank',
            component: React.lazy(() => import('./page-layouts/blank'))
        },
        {
            path: '/ui/icons',
            component: React.lazy(() => import('./icons/IconsUI'))
        },
        {
            path: '/ui/typography',
            component: React.lazy(() => import('./typography/TypographyUI'))
        },
        {
            path: '/ui/helper-classes',
            component: React.lazy(() => import('./helper-classes/HelperClassesUI'))
        }

    ]
};

