import React, {Component} from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

    render() {
        return (
            <div className="">
                <h2>My Profile</h2>
                <div className="">
                    <div className="">
                        <ul className="list">
                            <li className="list__item">Mr John Smith, tel (07788 666758) <a href="">edit</a></li>
                            <li className="list__item">jsmith@test.com <a href="">edit</a></li>
                            <li className="list__item"><a href="">Change password</a></li>
                            <li className="list__item"><a href="">Change email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customer: state.authentication.customer
    };
}

export default connect(mapStateToProps)(Profile);
