'use strict';

const Category = require('../../../modules/catalogue/models/category.model');
// const Navigation = require('../../../modules/catalogue/models/navigation.model');
const mongoose = require('mongoose');
const chalk = require('chalk');

const tree = require('./_categories.json');

module.exports.createCategories = () => {

};

module.exports.createNavigation = () => {
    const Navigation = mongoose.model('Navigation');

    Navigation.remove()
        .then(() => {

            Navigation.create({
                tree: JSON.stringify(tree)
            })
        });
    // console.log(Category);
    // console.log(Navigation);
    // CategoryHierarchy.remove({})
    //     .then(() => {
    //         CategoryHierarchy.create(hierarchyData);
    //     });
};

// module.exports.createCustomers = () => {
//     const Customer = require('mongoose').model('Customer');
//
//     Customer.create({fullname: 'Mr Test Customer', email: 'customer@test.com', password: Customer.generateHash('password')});
// };

module.exports.init = () => {
    this.createCategories();
    this.createNavigation();
};
