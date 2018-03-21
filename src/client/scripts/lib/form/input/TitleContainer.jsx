import React, {Component} from 'react';
// import {connect} from 'react-redux';

// import store from 'lib/redux/store';

import Title from 'lib/form/input/Title';

// @connect(store => {
//     return {
//         titles: store.config.customer.titles
//     }
// })
export default class TitleContainer extends Component {

    constructor(props) {
        super(props);
        // TODO put this into the NameContainer and pass in with props
        this.state = {
            titles: []
        };
    }

    componentDidMount() {
        fetch('/api/customer/titles', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({'titles': data});
        })
    }

    render() {
        return (
            <Title id="field-title" name="title" className="form-input" options={this.state.titles} />
        );
    }
}