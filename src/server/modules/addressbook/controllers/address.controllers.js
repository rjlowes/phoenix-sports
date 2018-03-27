'use strict';

const mongoose = require('mongoose');
const Address = mongoose.model('Address');

exports.list = (req, res) => {
    Address.find().where('customer').equals(req.user._id).exec((err, addresses) => {
        if(err) {
            return res.status(400).send({message: err.message});
        } else {
            return res.json(addresses);
        }
    });
};

// TODO add some login required middleware
// SEE https://stackoverflow.com/questions/45766838/node-js-how-restrict-page-access-to-unlogged-users
exports.read = (req, res) => {
    Address.findById(req.params.addressId).where('customer').equals(req.user._id)
        .then(address => res.json(address))
        .error(err => res.status(400).send({message: err.message}));
};

exports.create = (req, res) => {
    let address = new Address({
        name: req.body.name,
        telephone: req.body.telephone,
        street: req.body.street,
        townCity: req.body.townCity,
        county: req.body.county,
        postcode: req.body.postcode,
        country: req.body.country,
        customer: req.user
    });

    address.save(err => {
        if(err) {
            return res.status(400).send({message: err.message, errors: err.errors});
        } else {
            res.json(address);
        }
    })
};
