import React, { useState } from 'react';
import { FusePageSimple } from '@fuse';

import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    layoutRoot: {}
});

function eglobulus() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
                <div className="p-24"><h3>Eucalipto globulus</h3></div>
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

                                    src={"https://ivanacopavon.users.earthengine.app/view/seobentondviegrandismay"}
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

                                    src={"https://ivanacopavon.users.earthengine.app/view/seobentondviegrandismay"}
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

                                    src={"https://ivanacopavon.users.earthengine.app/view/seobentondviegrandismay"}
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

                                    src={"https://ivanacopavon.users.earthengine.app/view/alertjuly"}
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

export default eglobulus;