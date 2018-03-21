import React, {Component} from 'react';

export default class Input extends Component {

    componentWillMount() {
        // this.props.attachToForm(this);
    }

    componentWillUnmount() {
        // this.props.detachFromForm(this);
    }

    validate() {
        console.log('validate');
    }

    render() {
        const {handleChange, ...rest} = this.props;
        return (
            <div>
                <label htmlFor="">somthing</label>
                <input {...rest} type="text" onChange={handleChange}  />
            </div>
        );
    }
}
