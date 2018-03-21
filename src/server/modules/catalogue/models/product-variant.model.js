'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductVariantSchema = new Schema({
    sku: {
        type: String
    },
    size: {
        type: String
    },
    colour: {
        type: String
    },
    price: {
        type: Number
    },
    stock_level: {
        type: Number
    },
    product: {type: Schema.Types.ObjectId, ref: 'Product'}
}, 
{collection: 'product_variants'});

module.exports = mongoose.model('ProductVariant', ProductVariantSchema);