import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FusePageCarded, DemoContent } from '@fuse';

const useStyles = makeStyles({
    layoutRoot: {}
});

function MonitoringCR() {
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
                <div className="py-24"><h3>Grape Merlot</h3></div>
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
                                    paddingBottom: "35%"/*16:9 */,
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

                                    src={"https://jespavon.users.earthengine.app/view/barbandvitempjunioii"}
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
                                <h3 className="mb-16">Nutritation</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/barbanuttempjulioi"}
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
                                <h3 className="mb-16">Watter Content</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/barbasoiltempjuly-i"}
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
                                <h3 className="mb-16">Alerta</h3>
                                <iframe title="myFrame" style={{
                                    position: "absolute",
                                    top: -75,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    //clip: "10"
                                }}

                                    src={"https://jespavon.users.earthengine.app/view/barbaalertmerlotjulioii"}
                                    frameBorder="0"
                                />
                            </div>
                            )}
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
            innerScroll
        />
    )
}

export default MonitoringCR;