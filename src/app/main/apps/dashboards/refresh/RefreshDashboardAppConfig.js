import React from 'react';

export const RefreshDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/dashboards/refresh',
            component: React.lazy(() => import('./RefreshDashboardApp'))
        }
    ]
};
