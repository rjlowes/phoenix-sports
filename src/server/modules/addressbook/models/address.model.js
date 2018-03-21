'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddressSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    telephone: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    townCity: {
        type: String,
        require: true
    },
    county: {
        type: String,
        require: true
    },
    postcode: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    customer: {
        type: Schema.ObjectId,
        ref: 'Customer'
    }
});

module.exports = mongoose.model('Address', AddressSchema);
