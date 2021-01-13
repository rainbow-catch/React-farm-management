import React from 'react';
//import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
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

                                    src={"https://embed.windy.com/embed2.html?lat=9.102&lon=-25.488&zoom=4&level=surface&overlay=temp&menu=&message=true&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=12.125&detailLon=-18.457&metricWind=km%2Fh&metricTemp=default&radarRange=-1"}
                                    
                                
                            />
                        
        </div>

        
        
    );
}

export default React.memo(Widget1);


