import React from 'react';
//import { Button, Typography } from '@material-ui/core';
//import { makeStyles, useTheme, ThemeProvider } from '@material-ui/styles';
//import { FuseAnimate } from '@fuse';
//import { useSelector } from 'react-redux';
//import { Line } from 'react-chartjs-2';
//import _ from '@lodash';



function Widget1(props) {
   

    return (
        <div className="video"
                                    style={{
                                        position: "relative",
                                        paddingBottom: "10%"/*16:9 */,
                                        paddingTop: "1%",
                                        height: 0,
                                        overflow: "hidden",
                                        
                                        
                                    }}

                                >
                                    <h3 className="mb-16">M...</h3>
                                    <iframe  name="Right" title="001" id="iframe1"
                                    
                                    style={{
                                        position: "absolute",
                                        top: -710,
                                        botton:-200            ,
                                        left: 0,
                                        width: "100%",
                                        height: "800%",
                                        
                                        //clip: "10"
                                    }}

                                        src={"https://embed.windy.com/embed2.html?lat=-24.062&lon=-48.230&zoom=9&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=-24.039&detailLon=-48.889&metricWind=default&metricTemp=default&radarRange=-1"}
                                        
                                        //sandbox ="allow-presentation"
                                    />
                                     


        </div>
    );
} 

export default React.memo(Widget1);

