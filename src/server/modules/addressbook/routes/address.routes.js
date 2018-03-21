'use strict';

const addresses = require('../controllers/address.controllers');

module.exports = function (app) {
    app.route('/api/customer/addresses')
        .get(addresses.list)
        .post(addresses.create);
};