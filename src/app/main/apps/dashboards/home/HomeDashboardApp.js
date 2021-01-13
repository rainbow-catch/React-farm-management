import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useDispatch, useSelector } from 'react-redux';
import Widget1 from './widgets/Widget1';
//import Widget2 from './widgets/Widget2';
//import Widget3 from './widgets/Widget3';
//import Widget4 from './widgets/Widget4';
//import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
//import Widget8 from './widgets/Widget8';
//import Widget9 from './widgets/Widget9';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions'
import reducer from './store/reducers';

function HomeDashboardApp() {
    const dispatch = useDispatch();
    const widgets = useSelector(({ homeDashboardApp }) => homeDashboardApp.widgets.data);

    useEffect(() => {
        dispatch(Actions.getWidgets());
    }, [dispatch]);

    if (!widgets) {
        return null;
    }
    return (

        <div className="w-full">

            <Widget1 data={widgets.widget1} />  

            <FuseAnimate animation="transition.slideUpIn" delay={200}>

                

                <div className="flex flex-col md:flex-row sm:p-8 container">

                    

                    <div className="flex flex-1 flex-col min-w-0">

                                                
                        <FuseAnimate delay={600}>
                            <Typography className="px-16 pb-8 text-18 font-300">
                                Mercado de precios España
                            </Typography>
                        </FuseAnimate>
                    

                        <FuseAnimate delay={600}>
                            <Typography className="px-16 pb-8 text-18 font-300">
                                Mapa Meteorológico 
                            </Typography>
                        </FuseAnimate>

                        <div className="widget w-full p-16 pb-32">
                            <Widget6 data={widgets.widget6} />
                        </div>
                    </div>
            
                    <div className="flex flex-wrap w-full md:w-320 pt-16">

                        <div className="mb-32 w-full sm:w-1/2 md:w-full">
                            <FuseAnimate delay={600}>
                                <Typography className="px-16 pb-8 text-18 font-300">
                                    Tiempo en tu ciudad
                                </Typography>
                            </FuseAnimate>

                            <div className="widget w-full p-16">
                                <Widget7 data={widgets.widget7} />
                            </div>
                        </div>
                                                
                    </div>
                    
                </div>

                
            </FuseAnimate>
        </div>
    )
}

export default withReducer('homeDashboardApp', reducer)(HomeDashboardApp);
