import React, {Component} from 'react';

import TitleContainer from 'lib/form/input/TitleContainer';

export default class Name extends Component {

    constructor(props) {
        super(props);
        // TODO put this into the NameContainer and pass in with props
        this.state = {
            salutations: ['Mr', 'Mrs','Miss', 'Master', 'Wing Commander']
        };
    }

    render() {
        return (
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
                        <input aria-required="true" aria-label="First name" name="firstname" id="field-firstname" className="form-input" required />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="field-lastname" className="form-group__label">Last name</label>
                    <div className="form-group__input">
                        <input aria-required="true" aria-label="Lastname" name="lastname" id="field-lastname" className="form-input" required />
                    </div>
                </div>
            </fieldset>
        );
    }
}