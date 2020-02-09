import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FusePageCarded } from '@fuse';

const useStyles = makeStyles({
    layoutRoot: {}
});

function I_D() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
    };

    return (
        <FusePageCarded
            classes={{
                root: classes.layoutRoot,
                toolbar: "p-0"
            }}
            header={
                <div className="py-24"><h3>I+D+I</h3></div>
            }
            contentToolbar={
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="off"
                    className="w-full h-64"
                >
                    <Tab className="h-64" label="Eliminação da nuvem" />
                    <Tab className="h-64" label="Detecção de ervas daninhas" />
                    <Tab className="h-64" label="Temperatura Alta Resolución" />
                    <Tab className="h-64" label="Temperatura de alta resolução" />
                    <Tab className="h-64" label="Alterações de volume" />
                </Tabs>
            }
            content={
                <div className="p-24">
                    {selectedTab === 0 &&
                        (
                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "35%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >

                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/removeclouds1"}
                                    frameBorder="0"
                                />
                            </div>
                        )}
                    {selectedTab === 1 && (
                        <div>
                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "35%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >

                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/soybeeweed"}
                                    frameBorder="0"
                                />
                            </div>
                            )}
                        </div>
                    )}
                    {selectedTab === 2 && (
                        <div>
                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "35%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >

                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/temphighgrape"}
                                    frameBorder="0"
                                />
                            </div>
                            )}
                        </div>
                    )}
                    {selectedTab === 3 && (
                        <div>
                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "35%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >

                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/newfronted2"}
                                    frameBorder="0"
                                />
                            </div>
                            )}
                        </div>
                    )}
                    {selectedTab === 4 && (
                        <div>
                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "35%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >

                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/volumenvid"}
                                    frameBorder="0"
                                />
                            </div>
                        </div>
                    )}

                </div>
            }
            innerScroll
        />
    )
}

export default I_D;