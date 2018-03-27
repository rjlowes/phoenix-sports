import _ from 'lodash';
import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import PostalAddress from 'modules/account/addressbook/components/PostalAddress';


const AddressList = ({addresses}) => {

    if(!addresses) {
        return null;
    }

    return (
        <div className="row">
            {_.map(addresses, address => {
                return (
                    <div className="col-md-4" key={address._id}>
                        <div className="card-info type-sml">
                            <div className="card-info__text">
                                <PostalAddress address={address} />
                            </div>
                            <div className="card-info__actions">
                                 <ul className="list-linear">
                                    <li><Link to={`/account/addressbook/${address._id}/edit`}>edit</Link></li>
                                    <li>
                                        <form action="" method="post">
                                            <button>Delete</button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default AddressList;
