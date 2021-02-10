import {FuseUtils} from '@fuse';

function NoteModel(data)
{
    const item = data ? data : {};
    return {
        title      : item.title || '',
        description: item.description || '',
        archive    : item.archive || false,
        image      : item.image || '',
        time       : item.time || null,
        reminder   : item.reminder || null,
        checklist  : item.checklist || [],
        labels     : item.labels || [],
        polygon    : item.polygon || []
        //extra data
        /* 
        farmData   : item.farmData || null
        farm        : item.farm || '',
        lot         : item.lot || '',
        section     : item.section || '',
        
        culture     : item.culture || '', // enum : maize, vineyard, citrus
        variety     : item.variety || '',
        graft       : item.graft || '',
        plantingDate: item.plantingDate || '', //date

        irrigation      : item.irrigation || '', //enum : aspersion, dropper
        irrigationType  : item.irrigationType || '',
        issuers         : item.issuers || '', //number
        */
    }
}

export default NoteModel;
