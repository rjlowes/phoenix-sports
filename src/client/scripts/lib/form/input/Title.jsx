import React, {Component} from 'react';

import Option from 'lib/form/input/Option';


const Title = (props) => {
    return (
        <select id={props.id} name={props.name} className={props.className}>
            {props.options.map((option, index) => {
                return (<Option label={option.name} key={index} value={option._id} />)
            })}
        </select>
    );
};

export default Title;