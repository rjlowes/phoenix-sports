import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from 'modules/layout/components/Navigation';

import { fetchNavigation } from 'modules/App/appActions';


@connect(state => {
    return {
        categories: state.app.categories,
        depth: state.app.depth
    }
})
export default class NavigationContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {categories: []};
    }

    componentDidMount() {
        let { dispatch } = this.props;

        dispatch(fetchNavigation());
    }

    toggleNavigation(e) {
        document.body.classList.remove('action-nav-show');
    }

    render() {
        return <Navigation categories={this.props.categories} onClick={this.toggleNavigation} />
    }

}
