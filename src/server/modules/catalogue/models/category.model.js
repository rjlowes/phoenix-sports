'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let CategorySchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Category name required'
	},
	slug: {
		type: String,
		default: '',
		trim: true,
		required: 'Category slug required'
	}
});


module.exports = mongoose.model('Category', CategorySchema);
