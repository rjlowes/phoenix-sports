import React from 'react';

import TitleContainer from 'lib/form/input/TitleContainer';

const AddressForm = (props) => {
    return (
        <form onSubmit={props.submit}>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="field-title" className="form-group__label">Title</label>
                    <div className="form-group__input">
                        <TitleContainer />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="field-firstname" className="form-group__label">Firstname</label>
                    <div className="form-group__input">
                        <input aria-required="true" aria-label="First name" value={props.address.firstname} name="firstname" id="field-firstname" className="form-input" onChange={props.handleChange} required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="field-lastname" className="form-group__label">Last name</label>
                    <div className="form-group__input">
                        <input aria-required="true" aria-label="Lastname" name="lastname" id="field-lastname" className="form-input" required />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="field-telephone" className="form-group__label">Telephone</label>
                    <div className="form-group__input">
                        <input aria-required="true" aria-label="telephone" type="text" name="telephone" id="field-telephone" className="form-input" required />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="field-address1" className="form-group__label">Address line 1</label>
                    <div className="form-group__input">
                        <input aria-label="Address line 1" aria-required="true" name="address1" id="field-address1" className="form-input" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="field-address2" className="form-group__label">Address line 2</label>
                    <div className="form-group__input">
                        <input aria-label="Address line 2" name="address2" id="field-address2" className="form-input" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="field-address3" className="form-group__label">Address line 3</label>
                    <div className="form-group__input">
                        <input aria-label="Address line 3" name="field-address3" id="field-address3" className="form-input" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="field-town-city" className="form-group__label">Town/City</label>
                    <div className="form-group__input">
                        <input aria-label="Town or City" aria-required="true" name="townCity" id="field-town-city" className="form-input" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="field-county" className="form-group__label">County</label>
                    <div className="form-group__input">
                        <input aria-label="County" aria-required="true" name="county" id="field-county" className="form-input" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="field-postcode" className="form-group__label">Postcode</label>
                    <div className="form-group__input">
                        <input aria-label="Postcode" aria-required="true" name="postcode" id="field-postcode" className="form-input" required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="field-country" className="form-group__label">Country</label>
                    <div className="form-group__input">
                        <select aria-label="Country" aria-required="true" name="country" id="field-country" className="form-input" required>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>
                </div>
            </fieldset>
            <button>Go</button>
        </form>
    );
};

export default AddressForm;
