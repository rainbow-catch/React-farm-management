import React from 'react';


function Widget3(props)
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

                                    src={"https://ipavonfidesterra.users.earthengine.app/view/brasilnematodosalertasmeteorologicas1"}
                                    
                                
                            />
                        
        </div>

        
        
    );
}

export default Widget3;
