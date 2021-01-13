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

function Widget4(props)
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
                                    top: -56,
                                    botton:50,
                                    left: 0,
                                    width: "100%",
                                    height: "90%"
                                    //clip: "10"
                                }}

                                    src={"https://ipavonfidesterra.users.earthengine.app/view/brasilnematodosalertascultivos"}
                                    
                                
                            />
                        
        </div>

        
        
    );
}

export default Widget4;
