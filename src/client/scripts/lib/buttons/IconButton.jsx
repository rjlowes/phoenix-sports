import React, {Component, PropTypes} from 'react';


const IconButton = (props) => {

    // const showLabel = !!props.label;

    return (
        <button id={props.id} className="icon-btn" onClick={props.onClick}>
            <span className={`icon-btn__label${props.srOnly ? ' icon-btn__label--sr-only' : ''}`}>{props.label}</span>
            <span className="icon-btn__icon">
                {props.children}
            </span>
        </button>
    );
};

IconButton.PropTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    srOnly: PropTypes.boolean
};

export default IconButton;