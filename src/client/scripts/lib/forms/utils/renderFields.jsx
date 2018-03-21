import React, {Component} from 'react';

export const renderError = () => {

};

export const renderText = ({
    input,
    label,
    placeholder,
    type, meta: {touched, error, warning
}}) => (
    <div className="form-group">
      <label className="form-group__label">{label}</label>
      <div className="form-group__input">
        <input {...input} placeholder={placeholder} type={type} className="form-input" />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
);

class Select extends Component {

    renderOption(opt) {
        return <option key={opt.value} value={opt.value}>{opt.label}</option>
    }

    render() {
        const {
            input,
            label,
            type, meta: {touched, error, warning},
            options} = this.props;
        
        return (
            <div className="form-group">
                <label className="form-group__label">{label}</label>
                <div className="form-group__input">
                    <select {...input} className="form-input">
                        {options.map(opt => this.renderOption(opt))}
                    </select>
                    {touched &&
                        ((error && <span>{error}</span>) ||
                            (warning && <span>{warning}</span>))}
                </div>
            </div>
        );
    }
}

export {Select};

export const renderSelectx = ({
    input,
    label,
    type, meta: {touched, error, warning,
    options
}}) => {
    console.log('options', options);
    return (
        <div className="form-group">
          <label className="form-group__label">{label}</label>
          <div className="form-group__input">
              <select {...input} className="form-input">

              </select>
            {touched &&
              ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
          </div>
        </div>
    );
};
