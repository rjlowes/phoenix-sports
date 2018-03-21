import React from 'react';


const CustomerInfoForm = (props) => {
    return (
        <form onSubmit={props.submit}>
            <div>
                <label htmlFor="field-customer-name">Full name name</label>
                <input id="field-customer-name" name="fullname" onChange={props.change} value={props.customer.fullName} />
            </div>
            <div>
                <label htmlFor="field-customer-tel">Telephone</label>
                <input id="field-customer-tel" name="telephone" onChange={props.change} value={props.customer.telephone} />
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    );
};


export default CustomerInfoForm;