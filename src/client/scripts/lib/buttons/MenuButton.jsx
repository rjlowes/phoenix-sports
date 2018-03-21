import React, {Component, PropTypes} from 'react';

import IconButton from 'lib/buttons/IconButton';

export default class MenuButton extends Component {

    constructor(props) {
        super(props);

        this.toggleBodyClass = this.toggleBodyClass.bind(this);
    }

    toggleBodyClass() {
        document.body.classList.toggle('show-nav');
    }

    renderLabel() {
        return this.props.open ? 'Open menu' : 'Close menu';
    }

    renderIcon() {
        if(this.props.open) {
            return <span className="icon-menu icon-size--md"></span>;
        } else {
            return <span className="icon-close icon-size--md"></span>;
        }
    }

    renderId() {
        if(this.props.open) {
            return 'g-menu-button--open';
        } else {
            return 'g-menu-button--close';
        }
    }

	render() {
		return (
            <IconButton id={this.renderId()} label="{this.renderLabel()}" srOnly={true} onClick={this.toggleBodyClass}>
                {this.renderIcon()}
            </IconButton>
		);
	}
}

MenuButton.PropTypes = {
    open: PropTypes.boolean
};