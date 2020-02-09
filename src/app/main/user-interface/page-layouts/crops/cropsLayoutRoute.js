import React from 'react';

export const cropsLayoutRoute = [
    {
        path: '/ui/page-layouts/crops/grape/Merlot',
        component: React.lazy(() => import('./grape/Merlot'))
    },
    {
        path: '/ui/page-layouts/crops/grape/Tempranillo',
        component: React.lazy(() => import('./grape/Tempranillo'))
    },
    {
        path: '/ui/page-layouts/crops/almonds/almonds',
        component: React.lazy(() => import('./almonds/almonds'))
    },
    {
        path: '/ui/page-layouts/crops/rice/rice',
        component: React.lazy(() => import('./rice/rice'))
    },
    {
        path: '/ui/page-layouts/crops/tomato/tomato',
        component: React.lazy(() => import('./tomato/tomato'))
    },
    {
        path: '/ui/page-layouts/crops/coffe/coffe',
        component: React.lazy(() => import('./coffe/coffe'))
    },
    {
        path: '/ui/page-layouts/crops/cotton/cotton',
        component: React.lazy(() => import('./cotton/cotton'))
    },
    {
        path: '/ui/page-layouts/crops/forester/pelliotti',
        component: React.lazy(() => import('./forester/pelliotti'))
    },
    {
        path: '/ui/page-layouts/crops/forester/pcaribaea',
        component: React.lazy(() => import('./forester/pcaribaea'))
    },
    {
        path: '/ui/page-layouts/crops/forester/eglobulus',
        component: React.lazy(() => import('./forester/eglobulus'))
    },
    {
        path: '/ui/page-layouts/crops/nogal/nogal',
        component: React.lazy(() => import('./nogal/nogal'))
    }


];