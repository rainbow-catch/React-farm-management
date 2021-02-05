import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';

function RefreshDashboardApp() {
    const dispatch = useDispatch();
    const widgets = useSelector(({ refreshDashboardApp }) => refreshDashboardApp.widgets.data);
    const timerRef = React.useRef();

    useEffect(
        () => () => {
          clearTimeout(timerRef.current);
        },
        [],
    );

    useEffect(() => {
        dispatch(Actions.getWidgets());
    }, [dispatch]);

    const [keyForWidget3, setKeyForWidget3] = useState(0);
    const [keyForWidget4, setKeyForWidget4] = useState(10000);
    const [keyForWidget6, setKeyForWidget6] = useState(20000);

    const handleRefresh = () =>{
        setKeyForWidget3(keyForWidget3 + 1);
        setKeyForWidget6(keyForWidget6 + 1);
    }

    
    timerRef.current = setTimeout(() => {
        setKeyForWidget6(keyForWidget6 + 1);
        setKeyForWidget4(keyForWidget4 + 1);
    }, 15000);

    if (!widgets) {
        return null;
    }
    return (

        <div className="w-full">

            

            <FuseAnimate animation="transition.slideUpIn" delay={200}>

                <div className="flex flex-col md:flex-row sm:p-8 container">

                    <div className="flex flex-1 flex-col min-w-0">

                                                
                        <FuseAnimate delay={600}>
                            <Typography className="px-16 pb-8 text-18 font-300">
                                Refresh button
                            </Typography>
                        </FuseAnimate>
                        <Button id="Refresh" className="w-320" onClick={handleRefresh}>
                            Refresh
                        </Button>
                        <div className="widget w-full h-100 p-16 pb-32">
                            <Widget6 key={keyForWidget6} data={widgets.widget6} />
                        </div>

                        <FuseAnimate delay={600}>
                            <Typography className="px-16 pb-8 text-18 font-300">
                                Refresh 15 minute
                            </Typography>
                        </FuseAnimate>

                        <div className="widget w-full h-100 p-16 pb-32">
                            <Widget3 key={keyForWidget3} data={widgets.widget6} />
                        </div>

                        <FuseAnimate delay={600}>
                            <Typography className="px-16 pb-8 text-18 font-300">
                            Refresh together
                            </Typography>
                        </FuseAnimate>

                        <div className="widget w-full h-100 p-16 pb-32">
                            <Widget4 key={keyForWidget4} data={widgets.widget6} />
                        </div>
                    </div>
            
                    <div className="flex flex-wrap w-full md:w-320 pt-16">

                        <div className="mb-32 w-full sm:w-1/2 md:w-full">
                            <FuseAnimate delay={600}>
                                <Typography className="px-16 pb-8 text-18 font-300">
                                         Clima na cidade mais próxima
                                </Typography>
                            </FuseAnimate>

                            <div className="widget w-full p-16">
                                <Widget7 data={widgets.widget7} />
                            </div>
                        </div>

                        <div className="mb-32 w-full sm:w-1/2 md:w-full">
                            <FuseAnimate delay={600}>
                                <Typography className="px-16 pb-8 text-18 font-300">
                                     Calendário solar e lunar sua cidade mais próxima
                                </Typography>
                            </FuseAnimate>

                            <div className="widget w-full p-16">
                                <Widget8 data={widgets.widget8} />
                            </div>
                        </div>
                                                
                    </div>
                    
                </div>
                
                
            </FuseAnimate>
        </div>
    )
}

export default withReducer('refreshDashboardApp', reducer)(RefreshDashboardApp);
