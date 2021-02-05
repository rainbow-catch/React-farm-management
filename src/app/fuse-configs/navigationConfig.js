//import { MaterialUIComponentsNavigation } from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import { authRoles } from 'app/auth';

const navigationConfig = [
    {
        'id': 'applications',
        'title': 'Refresh Iframe',
        'auth': authRoles.admin,
        'type': 'group',
        'icon': 'apps',
        'children': [
            
            {
                'id': 'REFRESH IFRAME ',
                'title': '3 OPTIONS ',
                'type': 'item',
                'icon': 'today',
                'url': '/apps/dashboards/refresh'
            },
            {
                'id': 'Notes ',
                'title': 'NOTE',
                'type': 'item',
                'icon': 'today',
                'url': '/apps/notes'
            },
            
            
            
        ]
    },

   


];

export default navigationConfig;
