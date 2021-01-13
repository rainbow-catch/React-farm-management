//import { MaterialUIComponentsNavigation } from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import { authRoles } from 'app/auth';

const navigationConfig = [
    {
        'id': 'applications',
        'title': 'Aplicações',
        'auth': authRoles.admin,
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'dashboards',
                'title': 'Dashboards',
                'type': 'collapse',
                'icon': 'dashboard',
                'children': [
                    {
                        'id': 'analytics-dashboard',
                        'title': 'Análise',
                        'type': 'item',
                        'url': '/apps/dashboards/analytics'
                    }
                    
                ]
            },
            {
                'id': 'calendar',
                'title': 'Calendário',
                'type': 'item',
                'icon': 'today',
                'url': '/apps/calendar'
            },
            
            {
                'id': 'academy',
                'title': 'Academia',
                'type': 'item',
                'icon': 'school',
                'url': '/apps/academy'
            },

            {
                'id': 'file-manager',
                'title': 'Arquivos Blockchain',
                'type': 'item',
                'icon': 'folder',
                'url': '/apps/file-manager'
            },
            {
                'id': 'contacts',
                'title': 'Contatos',
                'type': 'item',
                'icon': 'account_box',
                'url': '/apps/contacts/all'
            },
            {
                'id': 'scrum',
                'title': 'scrumboard',
                'type': 'item',
                'icon': 'developer_board',
                'url': '/apps/scrumboard'
            }
        ]
    },

   


];

export default navigationConfig;
