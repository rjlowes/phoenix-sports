'use strict';

const basketControllers = require('../controllers/basket.controllers');

module.exports = function (app) {
    app.route('/api/basket').all(basketControllers.basketMiddleware)
        .get(basketControllers.list)
        .post(basketControllers.addLineItem);
};
