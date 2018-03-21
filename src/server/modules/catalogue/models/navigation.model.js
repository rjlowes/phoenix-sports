'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let NavigationSchema = new Schema({
	tree: {
		type: String
	}
});


module.exports = mongoose.model('Navigation', NavigationSchema);
