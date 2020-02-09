/**
 * Authorization Roles
 */
const authRoles = {
    admin: ['admin'],
    staff: ['admin', 'staff'],
    user: ['admin', 'staff', 'user'],
    user1: ['admin', 'user1'],
    user2: ['admin', 'user2'],
    onlyGuest: []
};

export default authRoles;
