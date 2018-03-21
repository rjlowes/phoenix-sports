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
