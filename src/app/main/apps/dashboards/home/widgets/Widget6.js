import React from 'react';
//import {Card, Icon, Tooltip} from '@material-ui/core';
//import GoogleMap from 'google-map-react';

//function Marker(props)
//{
//    return (
 //       <Tooltip title={props.text} placement="top">
  //          <Icon className="text-red">place</Icon>
  //      </Tooltip>
  //  );
//}

function Widget6(props)
{
    return (
        <div className="video" 
        
                
                                style={{
                                    position: "relative",
                                    paddingBottom: "40%"/*16:9 */,
                                    paddingTop: "25%",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >
                                <h3 className="mb-16">M...</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -31.5,
                                    botton:50,
                                    left: 0,
                                    width: "100%",
                                    height: "80%"
                                    //clip: "10"
                                }}

                                    src={"https://embed.windy.com/embed2.html?lat=40.781&lon=-1.626&zoom=5&level=surface&overlay=rain&menu=&message=true&marker=&calendar=&pressure=true&type=map&location=coordinates&detail=&detailLat=41.558&detailLon=-1.230&metricWind=default&metricTemp=default&radarRange=-1"}
                                    
                                
                            />
                        
        </div>

        
        
    );
}

export default Widget6;
