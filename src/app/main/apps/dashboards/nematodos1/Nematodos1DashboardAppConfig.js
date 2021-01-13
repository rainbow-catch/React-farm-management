import React from 'react';

export const Nematodos1DashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/dashboards/nematodos1',
            component: React.lazy(() => import('./Nematodos1DashboardApp'))
        }
    ]
};
