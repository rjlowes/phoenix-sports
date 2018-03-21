import React, {Component} from 'react';


const Option = (props) => {
    return <option value={props.value}>{props.label}</option>;
}

export default Option;