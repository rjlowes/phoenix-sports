import React, {Component} from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
    return (
        <form method="post" onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="email" className="form-group__label">Email</label>
                <div className="form-group__input">
                    <input type="email" name="email" id="email" className="form-input" 
                        placeholder="email@example.com" 
                        onChange={props.handleChange} 
                        value={props.customer.email} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-group__label">Password</label>
                <div className="form-group__input">
                    <input type="password" name="password" id="password" className="form-input" 
                        placeholder="Your password" 
                        onChange={props.handleChange} 
                        value={props.customer.password} />
                </div>
            </div>
            <button type="submit" className="btn btn--block">Sign in</button>
        </form>
    );
};

export default LoginForm;

