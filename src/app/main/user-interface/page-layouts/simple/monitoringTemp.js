import React, { useState } from 'react';
import { FusePageSimple, DemoContent } from '@fuse';

import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    layoutRoot: {}
});

function MonitoringTemp() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
    };

    return (
        <FusePageSimple
            classes={{
                root: classes.layoutRoot,
                toolbar: "px-16 sm:px-24"
            }}
            header={
                <div className="p-24"><h3>GRAPE</h3></div>
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
                    <Tab className="h-64" label="Vegetative Health" />
                    <Tab className="h-64" label="Nutritation" />
                    <Tab className="h-64" label="Watter Content" />
                    <Tab className="h-64" label="Alert" />
                    <Tab className="h-64" label="Test" />

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
                                <h3 className="mb-16">Vegetative Health</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/barbanuttempjuneii"}
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
                                <h3 className="mb-16">Nutritation</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/barbanutmerjulioii"}
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
                                <h3 className="mb-16">Watter Content</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/barbasoilmerjuneii"}
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
                                <h3 className="mb-16">Alert</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/barbaalertabril"}
                                    frameBorder="0"
                                />
                            </div>
                        </div>
                    )}
                    {selectedTab === 4 && (
                        <div>
                            <h3 className="mb-16">Test</h3>
                            <DemoContent />
                        </div>
                    )}

                </div>
            }
        />
    )
}

export default MonitoringTemp;