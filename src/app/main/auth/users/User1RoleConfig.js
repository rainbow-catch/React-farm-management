import { authRoles } from 'app/auth';
import User1Role from './User1Role';

export const User1RoleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.user1,//['User1 only]
    routes: [
        {
            path: '/auth/users',
            component: User1Role
        }
    ]
};