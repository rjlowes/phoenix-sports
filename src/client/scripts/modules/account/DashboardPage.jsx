import React, {Component} from 'react';


export default class DashboardPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="">
                <div className="row">
                    <div className="col-xs-8 no-gutter">
                        <div className="card">
                            <div className="card__footer">
                                <div className="card__actions">
                                    <ul>
                                        <li>Mr Richard Lowes, tel (07788 666758) <a href="">edit</a></li>
                                        <li><a href="">Change password</a></li>
                                        <li><a href="">Change profile photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-8 no-gutter">
                        <div className="card">
                            <div className="card__footer">
                                <div className="card__actions">
                                    <ul>
                                        <li>Mr Richard Lowes, tel (07788 666758) <a href="">edit</a></li>
                                        <li><a href="">Change password</a></li>
                                        <li><a href="">Change profile photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card">

                            <div className="card__footer">
                                <div className="card__actions">
                                    <ul>
                                        <li>Mr Richard Lowes, tel (07788 666758) <a href="">edit</a></li>
                                        <li><a href="">Change password</a></li>
                                        <li><a href="">Change profile photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
