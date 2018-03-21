import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderText, Select } from 'lib/forms/utils/renderFields';

// const renderField = ({
//   input,
//   label,
//   type,
//   meta: { touched, error, warning }
// }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched &&
//         ((error && <span>{error}</span>) ||
//           (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// );

const validate = values => {
  const errors = {}
  if(!values.name) {
      errors.name = 'We need to know who you are.'
  } else if (values.name.length > 100) {
      errors.name = 'Ooooh, that is too long. Only 100 chars dude';
  }
  if(!values.telephone) {
      errors.telephone = 'We need to be able to contact you.'
  } else if (values.telephone.length > 100) {
      errors.telephone = 'Ooooh, that is too long. Only 100 chars dude';
  }

  // if (!values.firstName) {
  //   errors.firstName = 'Required'
  // } else if (values.firstName.length > 15) {
  //   errors.firstName = 'Must be 15 characters or less'
  // }
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  // if (!values.age) {
  //   errors.age = 'Required'
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number'
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old'
  // }

  return errors
};

// let AddressFormXXX = props => {
//     const { handleSubmit, pristine, reset, submitting, address } = props;
//
//     const options = [
//         {label: 'United Kingdom', value: 'GB'},
//         {label: 'France', value: 'FR'},
//         {label: 'Germany', value: 'DE'},
//         {label: 'Poland', value: 'PL'}
//     ];
//
//     console.log('address form name', name);
//
//     return (
//         <form initialValues={address} onSubmit={handleSubmit}>
//             <Field name="name" component={renderText} type="text" label="Name" placeholder="e.g. Mr John Smith" />
//             <Field name="telephone" component={renderText} type="text" label="Telephone" placeholder="e.g. 00000000 til 5pm 1111111111 after 5pm" />
//             <Field name="street" component={renderText} type="text" label="Street address" placeholder="e.g. 1 abc road" />
//             <Field name="townCity" component={renderText} type="text" label="Town or City" />
//             <Field name="county" component={renderText} type="text" label="County" />
//             <Field name="postcode" component={renderText} type="text" label="Postcode" />
//             <Field name="country" component={Select} type="text" label="Country" options={options} />
//             <button type="submit" className="btn" disabled={submitting}>Submit</button>
//         </form>
//     );
// };

class AddressForm extends Component {

    componentWillMount() {
        if (this.props.pristine) this.props.initialize(this.props.address);
    }

    componentWillUnMount() {
        if (this.props.pristine) this.props.destroyForm();
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, address } = this.props;

        const options = [
            {label: 'United Kingdom', value: 'GB'},
            {label: 'France', value: 'FR'},
            {label: 'Germany', value: 'DE'},
            {label: 'Poland', value: 'PL'}
        ];

        return (
            <form onSubmit={handleSubmit}>
                <Field name="name" component={renderText} type="text" label="Name" placeholder="e.g. Mr John Smith" />
                <Field name="telephone" component={renderText} type="text" label="Telephone" placeholder="e.g. 00000000 til 5pm 1111111111 after 5pm" />
                <Field name="street" component={renderText} type="text" label="Street address" placeholder="e.g. 1 abc road" />
                <Field name="townCity" component={renderText} type="text" label="Town or City" />
                <Field name="county" component={renderText} type="text" label="County" />
                <Field name="postcode" component={renderText} type="text" label="Postcode" />
                <Field name="country" component={Select} type="text" label="Country" options={options} />
                <button type="submit" className="btn" disabled={submitting}>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'addressForm',
    validate
})(AddressForm);
