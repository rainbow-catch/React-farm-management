import React from 'react';
import { Card } from '@material-ui/core';
//import { useTheme } from '@material-ui/styles';
//import { Doughnut } from 'react-chartjs-2';
//import _ from '@lodash';

function Widget7(props) {
    
    

    return (
        <Card className="w-full rounded-8 shadow-none border-1">
            <div className="video" 
        
                
        style={{
            position: "relative",
            paddingBottom: "100%"/*16:9 */,
            paddingTop: "100%",
            height: 50,
            overflow: "hidden"
        }}

    >
        
        <iframe title="myFrame" style={{
            position: "absolute",
            top: -0,
            botton:-55,
            left: 0,
            width: "100%",
            height: "450%"
            //clip: "10"
        }}

            src={"https://www.meteoblue.com/es/tiempo/widget/daily/cassilandia_brasil_8260793?geoloc=fixed&days=5&tempunit=CELSIUS&windunit=METER_PER_SECOND&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&windgust=1&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&humidity=1&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&pressure=1&layout=light"}   
            scrolling="YES" 
            allowtransparency="true" 
            //sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" 
            
        
    />

</div>
            
            
        </Card>
    );
}

export default React.memo(Widget7);
