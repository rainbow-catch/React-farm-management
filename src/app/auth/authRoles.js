/**
 * Authorization Roles
 */
const authRoles = {
    admin: ['admin'],
    staff: ['admin', 'staff'],
    user: ['admin', 'staff', 'user'],
    user1: ['admin', 'user1'],
    user2: ['admin', 'user2'],
    USP1:['admin', 'USP1'],
    citrus:['admin','citrus'],
    vissolela1:['admin','vissolela1'],
    satfazendas1:['admin','satfazendas1'],
    soya1:['admin','soya1'],
    soya2:['admin','soya2'],
    pasto1:['admin','pasto1'],
    nematodos1:['admin','nematodos1'],

    onlyGuest: []
};

export default authRoles;
