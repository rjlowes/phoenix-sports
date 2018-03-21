import React, {Component} from 'react';


export default class Address extends Component {

    render() {
        return (
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
        );
    }
}