import React, { useState } from 'react';
import { FusePageSimple } from '@fuse';

import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    layoutRoot: {}
});

function Tomato() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
    };

    return (
        <FusePageSimple
            classes={{
                root: classes.layoutRoot,
                toolbar: "px-16 sm:px-14"
            }}
            header={
                <div className="p-24"><h3>Tomate</h3></div>
            }
            contentToolbar={
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="off"
                    className="w-full h-64 border-b-1"
                >
                    <Tab className="h-64" label="Índice de saúde" />
                    <Tab className="h-64" label="Nutrição" />
                    <Tab className="h-64" label="Estresse hídrico" />
                    <Tab className="h-64" label="Alerta" />
                    <Tab className="h-64" label="Alta resolução" />

                </Tabs>
            }
            content={
                <div className="p-24">
                    {selectedTab === 0 &&
                        (

                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "40%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >
                                <h3 className="mb-16">M...</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/tomaliandvi3"}
                                    frameBorder="0"
                                />
                            </div>


                        )}
                    {selectedTab === 1 && (
                        <div>

                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "40%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >
                                <h3 className="mb-16">N...</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/tomalianutritation4"}
                                    frameBorder="0"
                                />
                            </div>


                        </div>
                    )}
                    {selectedTab === 2 && (
                        <div>
                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "40%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >
                                <h3 className="mb-16">W...</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/tomaliasoilmositure3"}
                                    frameBorder="0"
                                />
                            </div>
                        </div>
                    )}
                    {selectedTab === 3 && (
                        <div>
                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "40%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >
                                <h3 className="mb-16">A...</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/tomaliaalert2"}
                                    frameBorder="0"
                                />
                            </div>
                        </div>
                    )}
                    {selectedTab === 4 && (
                        <div>
                            <div className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "40%"/*16:9 */,
                                    paddingTop: "0",
                                    height: 0,
                                    overflow: "hidden"
                                }}

                            >
                                <h3 className="mb-16">H...</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/fusmerlotjuliop4"}
                                    frameBorder="0"
                                />
                            </div>

                        </div>
                    )}

                </div>
            }
        />
    )
}

export default Tomato;