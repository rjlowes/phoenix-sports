'use strict';

const basket = require('../controllers/basket');


exports = function (app) {
    app.route('/api/basket/items')
        .post(basket.addItem);
};