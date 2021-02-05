import React from 'react';
import { Card } from '@material-ui/core';
//import { useTheme } from '@material-ui/styles';
//import { Doughnut } from 'react-chartjs-2';
//import _ from '@lodash';

function Widget8(props) {
    
    

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

            src={"https://www.meteoblue.com/es/tiempo/widget/seeing/cassilandia_brasil_8260793?geoloc=fixed&noground=0&noground=1"}   
            scrolling="YES" 
            allowtransparency="true" 
            //sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" 
            
        
    />

</div>
            
            
        </Card>
    );
}

export default React.memo(Widget8);
