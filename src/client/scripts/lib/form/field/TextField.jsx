import React, {Component} from 'react';


export default class TextField extends Component {

    constructor(props) {
        super(props);

        let opts = {};
        if(this.props.)
    }

    render() {
        // I think this means get named pairs then everything else is in inputProps
        // var {field, help, label, onChange, ...inputProps} = this.props

        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input 
                    type="text" 
                    onFieldChanged={this.props.handleFieldChange} 
                    class="form-input" 
                    id={this.props.id}
                />
            </div>
        );
    }
}

// var {field, help, label, onChange, ...inputProps} = this.props
//     return <FormField field={field} help={help} inputProps={inputProps} label={label}>
//       <input
//         {...inputProps}
//         className="form-control"
//         name={field.name}
//         onBlur={field.onBlur}
//         onChange={onChange && field.onChange}
//       />
//     </FormField>