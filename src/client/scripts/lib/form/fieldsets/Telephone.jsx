import React, {Component} from 'react';


export default class Telephone extends Component {

    render() {
        return (
            <fieldset>
                <div className="form-group">
                    <label htmlFor="field-telephone" className="form-group__label">Telephone</label>
                    <div className="form-group__input">
                        <input aria-required="true" aria-label="telephone" type="text" name="telephone" id="field-telephone" className="form-input" required />
                    </div>
                </div>
            </fieldset>
        );
    }
}