import React, {Component} from 'react';

export default class Form extends Component {

    constructor(props) {
        super(props);

    }

    handleSubmit() {

    }

    handleValidSubmit() {

    }

    handleInvalidSubmit() {
        
    }

    render() {
        return (
            <form
                onSubmit={this.props.onSubmit}
                onChange={this.props.onChange}
                onUpdate={this.props.onUpdate}>
                {this.props.children}
            </form>
        )
    }
}