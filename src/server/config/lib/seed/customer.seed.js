'use strict';

//const Customer = require('../../../modules/customer/models/customer.model');


module.exports.createCustomers = () => {
    const Customer = require('mongoose').model('Customer');

    Customer.create({fullname: 'Mr Test Customer', email: 'customer@test.com', password: Customer.generateHash('password')});
};

module.exports.init = () => {
    this.createCustomers();
};
