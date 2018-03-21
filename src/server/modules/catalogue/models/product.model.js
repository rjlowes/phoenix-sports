'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    upk: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    variants: [{type: Schema.Types.ObjectId, ref: 'ProductVariant'}]
});

module.exports = mongoose.model('Product', ProductSchema);
