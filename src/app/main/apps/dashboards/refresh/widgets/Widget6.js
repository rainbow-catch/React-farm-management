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
                                    top: -5,
                                    botton:50,
                                    left: 0,
                                    width: "100%",
                                    height: "90%"
                                    //clip: "10"
                                }}

                                    //src={"https://datastudio.google.com/embed/reporting/fcc4e838-b2f0-4705-a096-9dbd7c7bbcd1/page/ETtzB"}
                                    src={"http://localhost:3000"}
                                
                            />
                        
        </div>

        
        
    );
}

export default Widget6;
