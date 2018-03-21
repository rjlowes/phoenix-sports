'use strict';

const chalk = require('chalk');
const mongoose = require('../mongoose');
const app = require('../app');
const customerSeed = require('./customer.seed');
const categoriesSeed = require('./categories.seed');
const Product = require('../../../modules/catalogue/models/product.model');
const ProductVariant = require('../../../modules/catalogue/models/product-variant.model');

module.exports.seedProducts = function() {
    this.createProduct(
        {upk: 'NIKE_COOL_MILER_TEE', title: 'Cool Miler T-Shirt', brand: 'Nike', description: 'Mens short sleeve running top.'},
        [
            {size: 'XS', colour: 'Blue', price: 29.95},
            {size: 'S', colour: 'Blue', price: 29.95},
            {size: 'M', colour: 'Blue', price: 29.95},
            {size: 'L', colour: 'Blue', price: 29.95},
            {size: 'XL', colour: 'Blue', price: 29.95}]);

    this.createProduct(
        {upk: 'NIKE_SWOOSH_ATHLETE_TEE', title: 'Swoosh Athlete T-Shirt', brand: 'Nike', description: 'Mens t-shirt'},
        [{size: 'S', colour: 'White', price: 24.95}, {size: 'M', colour: 'White', price: 24.95}]);

    this.createProduct(
        {upk: 'ADIDAS_BIG_ICON_TEE', title: 'Big Icon T-shirt', brand: 'Adidas', description: 'Mens t-shirt'},
        [{size: 'S', colour: 'White', price: 24.95}, {size: 'M', colour: 'White', price: 24.95}]);
};

/**
 * productData => {upk: 'NIKE_COOL_MILER', title: 'Nike Cool Miler', description: 'Mens short sleeve running top.'}
 * variantData => [{size: 'SM', colour: 'Blue', price: 29.95}, {size: 'MD', colour: 'Blue', price: 29.95}]
 */
module.exports.createProduct = (productData = {}, variantData = []) => {
    Product.create(productData)
        .then(product => {
            variantData.forEach(variant => {
                variant.product = product._id;
                variant.sku = this.createSkuCode(product.upk, variant.size, variant.colour);
                ProductVariant.create(variant)
                    .then(variant => {
                        product.variants.push(variant);
                        product.save();
                    });
            });
        });
};

module.exports.createSkuCode = (upk, size, colour) => {
    return upk + '_' + size.toUpperCase() + '_' + colour.toUpperCase();
};

module.exports.seed = function () {
    ProductVariant.remove()
        .then(() => {
            Product.remove()
                .then(() => this.seedProducts());
        })
        .catch(err => console.log(err));
};

module.exports.init = function() {
    app.init(() => {
        console.log(chalk.bgGreen('Starting db seed'));
        this.seed();
        customerSeed.init();
        categoriesSeed.init();
    });
};
