import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import App from 'modules/App/App';
import {loadInitialData} from 'utils/bootstrap';
import initStore from 'utils/store';

const history = createHistory();

const renderApp = (store) => {
    ReactDOM.render(
        <App store={store} history={history} />,
        document.getElementById('container')
    );
};


loadInitialData((data) => {
    let store = initStore(history, data);
    renderApp(store);
}, err => {
    console.log('error', err);
});
