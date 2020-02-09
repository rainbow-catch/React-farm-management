import '@fake-db'
import React from 'react';
import {FuseAuthorization, FuseLayout, FuseTheme} from '@fuse';
import Provider from 'react-redux/es/components/Provider';
import {Router} from 'react-router-dom';
import jssExtend from 'jss-extend';
import history from '@history';
import {Auth} from './auth';
import store from './store';
import AppContext from './AppContext';
import routes from './fuse-configs/routesConfig';
import {create} from 'jss';
import {StylesProvider, jssPreset, createGenerateClassName} from '@material-ui/styles';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const jss = create({
    ...jssPreset(),
    plugins       : [...jssPreset().plugins, jssExtend()],
    insertionPoint: document.getElementById('jss-insertion-point'),
});

const generateClassName = createGenerateClassName();

const App = () => {
    return (
        <AppContext.Provider
            value={{
                routes
            }}
        >
            <StylesProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={store}>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <Auth>
                            <Router history={history}>
                                <FuseAuthorization>
                                    <FuseTheme>
                                        <FuseLayout/>
                                    </FuseTheme>
                                </FuseAuthorization>
                            </Router>
                        </Auth>
                    </MuiPickersUtilsProvider>
                </Provider>
            </StylesProvider>
        </AppContext.Provider>
    );
};

export default App;
