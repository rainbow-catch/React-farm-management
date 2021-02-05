import React, {useState} from 'react';
import { Input, Button, Select } from '@material-ui/core';
import { isEmpty } from 'lodash';


function NoteFormFarm(props)
{
    let data = props.farmData
    console.log(data)
    if(isEmpty(data)) data = {
        farm:'',
        lot:'',
        section:'',

        culture:'',
        variety:'',
        graft:'',
        plantingDate:'',
        
        irrigation:'',
        irrigationType:'',
        issuers:'',
    }
    const [farmData, setFarmData] = useState(data);

    const handleClick = () => props.onFarmDataChange(farmData)
    const handleChange = (e) => {
        farmData[e.target.name] = e.target.value
        setFarmData({...farmData})
        console.log(farmData)
    }
    const handleCancel = () => props.toggleInput()

    return (
        <div className={props.className}>
            <div className="flex">
                <div className="w-1/3 flex flex-col">
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="FINCA" type="text" name="farm" value={farmData.farm} disableUnderline fullWidth />
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="LOTE" type="text" name="lot" value={farmData.lot} disableUnderline fullWidth />
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="SECCION" type="text" name="section" value={farmData.section} disableUnderline fullWidth />
                </div>
                <div className="w-1/3 flex flex-col">
                    {/* <Select className="text-14 p-2" onChange={handleChange} name="culture" value={farmData.culture} disableUnderline fullWidth>
                        <option value="" disabled>Cultivo</option>
                        <option value="maize">maíz</option>
                        <option value="vineyard">viñedo</option>
                        <option value="citrus">cítricos</option>
                    </Select> */}
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="Culture" type="text" name="culture" value={farmData.culture} disableUnderline fullWidth />
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="Variedad" type="text" name="variety" value={farmData.variety} disableUnderline fullWidth />
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="Injerto" type="text" name="graft" value={farmData.graft} disableUnderline fullWidth />
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="Fecha siembra/plantacion" type="date" name="plantingDate" value={farmData.plantingDate} disableUnderline fullWidth />
                </div>
                <div className="w-1/3 flex flex-col">
                    {/* <Select className="text-14 p-2" onChange={handleChange} name="irrigation" value={farmData.irrigation} disableUnderline fullWidth>
                        <option value="" disabled>Riego</option>
                        <option value="Aspersion">Aspersion</option>
                        <option value="dropper">Gotero</option>
                    </Select> */}
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="Riego" type="text" name="irrigation" value={farmData.irrigation} disableUnderline fullWidth />
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="Tipo riego" type="text" name="irrigationType" value={farmData.irrigationType} disableUnderline fullWidth />
                    <Input className="text-14 p-2" onChange={handleChange} placeholder="Emisores" type="number" name="issuers" value={farmData.issuers} disableUnderline fullWidth />
                </div>
            </div>
            <Button className="m-4" onClick={handleClick} variant="outlined" size="small" >
                Create
            </Button>
            <Button className="m-4" onClick={handleCancel} variant="outlined" size="small" >
                Cancel
            </Button>
        </div>
    );
}

export default NoteFormFarm;
