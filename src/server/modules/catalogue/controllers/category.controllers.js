'use strict';

exports.hierarchy = function (req, res) {
	req.session.hierarchySet = true;
	var testData = {
		depth: 2,
		cats: [{
				name: 'Menswear', 
				slug: 'menswear',
				children: [{
					name: 'Tees',
					slug: 'mens-tees',
				}]
			},
			{
				name: 'Womenswear', 
				slug: 'womenswear',
				children: [{
					name: 'Dresses',
					slug: 'womens-dresses',
				}]
			}
		]	
	};

	return res.json(testData);
};

exports.details = function (req, res) {

};

exports.productList = function (req, res) {
	let categoryId = req.params.categoryId;
	let products = [];

	for(var i = 0; i < 10; i++) {
		products.push({
			id: i,
			title: 'Product ' + i,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus laoreet, aliquet lacus at, maximus nisl. Suspendisse potenti. Mauris imperdiet, dolor quis blandit dignissim, purus justo consectetur erat, nec finibus enim nunc nec ligula. Nunc ullamcorper orci ut orci tristique ultrices.'
		});
	}

	return res.json(products);
};

exports.productDetails = function (req, res) {
	let productId = req.params.productId;

	let product = {
        title: 'Product ' + productId,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus laoreet, aliquet lacus at, maximus nisl. Suspendisse potenti. Mauris imperdiet, dolor quis blandit dignissim, purus justo consectetur erat, nec finibus enim nunc nec ligula. Nunc ullamcorper orci ut orci tristique ultrices.',
        variants: [{
				sku: 'abc',
				size: 'SM'
			},{
				sku: 'def',
				size: 'MD'
			}]
	};

	return res.json(product);
};