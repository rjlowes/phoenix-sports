'use strict';

const BasketService = require('../services/basket.service');
const ProductVariant = require('mongoose').model('ProductVariant');

module.exports.list = (req, res) => {
    const basket = req.basketService.getBasket(req.session);
    res.json(basket);
};

module.exports.addLineItem = (req, res) => {
    const {basketService} = req;
    const sku = req.body.sku;
    const qty = req.body.qty | 1;

    ProductVariant
        .findOne({sku: sku})
        .then(variant => {
            if(!variant) {
                return res.status(404).json({it: 'no variant. did not work!'});
            }
            
            basketService.addItem(req.session, variant, qty);
            return res.status(201).json(basketService.getBasket(req.session));
        })
        .catch(err => {
            return res.status(404).json({err: err});
        });
};

module.exports.removeItem = (req, res) => {

};

// Basket Middleware
exports.basketMiddleware = (req, res, next) => {
    req.basketService = new BasketService();
    return next();
};
