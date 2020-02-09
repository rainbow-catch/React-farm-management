import React from 'react';
//import { Card } from '@material-ui/core';
//import GoogleMap from 'google-map-react';

//function Marker(props)
//{
//    return (
//        <Tooltip title={props.text} placement="top">
//            <Icon className="text-red">place</Icon>
//        </Tooltip>
//    );
//}

function Widget6(props) {
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
                                    top: -20,
                                    botton:50,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://datastudio.google.com/embed/reporting/1dAC3oTBYc3cnZB-36su3UjqecpCVQqVm/page/YQhw"}
                                    frameBorder="0"
                                />
                            </div>

        
    );
}
//https://datastudio.google.com/embed/reporting/1dAC3oTBYc3cnZB-36su3UjqecpCVQqVm/page/YQhw
export default Widget6;
