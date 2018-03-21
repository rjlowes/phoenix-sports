'use strict';

const categories = require('../controllers/category.controllers');

// http://devdocs.magento.com/guides/v2.0/rest/list.html

module.exports = function (app) {

	app.route('/api/category-hierarchy')
		.get(categories.hierarchy);


	app.route('/api/categories/:categoryId/products')
		.get(categories.productList);


	app.route('/api/products/:productId')
		.get(categories.productDetails);

	// server.route({
	// 	method: 'GET',
	// 	path: '/api/category-hierarchy',
	// 	handler: function (request, reply) {
	// 		console.log('getting hierarchy');
	// 		reply({
	// 			depth: 2,
	// 			cats: [
	// 				{
	// 					name: 'Menswear', 
	// 					slug: 'menswear',
	// 					children: [{
	// 						name: 'Tees',
	// 						slug: 'mens-tees',
	// 					}]
	// 				},
	// 				{
	// 					name: 'Womenswear', 
	// 					slug: 'womenswear',
	// 					children: [{
	// 						name: 'Dresses',
	// 						slug: 'womens-dresses',
	// 					}]
	// 				}
	// 			]	
	// 		});
	// 	}
	// });

	// server.route({
	// 	method: 'GET',
	// 	path: '/api/categories/{categoryId}/products',
	// 	handler: function (request, reply) {
	// 		let categoryId = request.params.categoryId;
	// 		let products = [];

	// 		for(var i = 0; i < 10; i++) {
	// 			products.push({
	// 				id: i,
	// 				title: 'Product ' + i,
	// 				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus laoreet, aliquet lacus at, maximus nisl. Suspendisse potenti. Mauris imperdiet, dolor quis blandit dignissim, purus justo consectetur erat, nec finibus enim nunc nec ligula. Nunc ullamcorper orci ut orci tristique ultrices.'
	// 			});
	// 		}

	// 		reply(products);
	// 	}
	// });

	// server.route({
	// 	method: 'GET',
	// 	path: '/api/products/{productId}',
	// 	handler: function (request, reply) {
	// 		let productId = request.params.productId;
	// 		let product = {
 //                title: 'Product' + productId,
 //                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus laoreet, aliquet lacus at, maximus nisl. Suspendisse potenti. Mauris imperdiet, dolor quis blandit dignissim, purus justo consectetur erat, nec finibus enim nunc nec ligula. Nunc ullamcorper orci ut orci tristique ultrices.',
 //                variants: [{
	// 					sku: 'abc',
	// 					size: 'SM'
	// 				},{
	// 					sku: 'def',
	// 					size: 'MD'
	// 				}]
	// 		};
	// 		reply(product);
	// 	}
	// })

	// server.route({
	// 	method: 'GET',
	// 	path: '/{path*}',
	// 	handler: function (request, reply) {
	// 		console.log('iniifijdifjidjifj');
	// 		reply.file('./public/index.html');
	// 	}
	// });


};


