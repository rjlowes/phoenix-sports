import React, {Component} from 'react';


export default class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.customer[event.target.name] = event.target.value;
    }

    // TODO validate
    handleSubmit(event) {
        event.preventDefault();
        this.props.submitCustomer();
    }

    render() {

        const salutations = ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof'];

        return (
            <form method="post" action="" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <select id="title" name="title" className="form-input" onChange={this.handleChange}>
                        <option></option>
                        {salutations.map((salutation, index) => {
                            return <option key={index} value={salutation}>{salutation}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="firstname" className="form-label">Firstname</label>
                    <input type="firstname" name="firstname" id="firstname" className="form-input" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname" className="form-label">Lastname</label>
                    <input type="lastname" name="lastname" id="lastname" className="form-input" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-input" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-input" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn">Register</button>
            </form>
        );
    }
}