import React from 'react';

export const HomeDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/dashboards/home',
            component: React.lazy(() => import('./HomeDashboardApp'))
        }
    ]
};
