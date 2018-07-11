import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Layout from 'containers/layout'

const layoutPages = Component => props => <Layout><Component {...props} /></Layout>;

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {Layout}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();