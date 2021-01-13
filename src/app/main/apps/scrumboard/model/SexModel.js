import {FuseUtils} from '@fuse';

class SexModel {
    constructor(data)
    {
        const sex = data ? data : {};

        this.id = sex.id || FuseUtils.generateGUID();
        this.name = sex.name || '';
        this.class = sex.class || 'bg-blue text-white';
    }
}

export default SexModel;
