import { authRoles } from 'app/auth';
import User2Role from './User2Role';

export const User2RoleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.user2,//['User1 only]
    routes: [
        {
            path: '/auth/users',
            component: User2Role
        }
    ]
};