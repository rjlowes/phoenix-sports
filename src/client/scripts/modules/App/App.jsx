import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter as Router} from 'react-router-redux';
import Layout from 'modules/layout/Layout';


export default class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={this.props.history}>
                    <Layout />
                </Router>
            </Provider>
        );
    }
}
