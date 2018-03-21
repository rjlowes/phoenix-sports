'use strict';

const mongooseConfig = require('../app/server/config/lib/mongoose');
const mongoose = require('mongoose');

mongooseConfig.loadModels();

const Category = mongoose.model('Category');

mongooseConfig.connect(function () {
	console.log('connected');

	// Do you need a root category?

	let menswear = new Category({name: 'Menswear', slug: 'menswear'});
	let mensTees = new Category({name: 'Tees', slug: 'mens-tee'});
	let mensJeans = new Category({name: 'Jeans', slug: 'mens-jeans'});
	let mensTops = new Category({name: 'Tops', slug: 'mens-tops'});
	let mensShoes = new Category({name: 'Shoes', slug: 'mens-shoes'});

	mensTees.parent(menswear);
	mensJeans.parent(menswear);
	mensTops.parent(menswear);
	mensShoes.parent(menswear);

	menswear.save(function () {
		mensJeans.save();
		mensTees.save();
		mensTops.save();
		mensShoes.save();
	})


	let womenswear = new Category({name: 'Womenswear', slug: 'womenswear'});



	mongooseConfig.disconnect();
});