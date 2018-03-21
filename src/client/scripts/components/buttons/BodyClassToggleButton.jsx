import React, { Component } from 'react';

export default class BodyClassToggleButton extends Component {

    toggleClass = () => {
        document.body.classList.toggle(this.props.clazz);
    }

    render() {
        const { children } = this.props;

        return (
            <button onClick={ this.toggleClass }>
                { children }
            </button>
        );
    }
}
