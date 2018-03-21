const mongooseConfig = require('../src/server/config/lib/mongoose');
const mongoose = require('mongoose');

mongooseConfig.loadModels();

const Category = mongoose.model('Category');
const Product = mongoose.model('Product');

mongooseConfig.connect(function () {
    console.log('connected');

    const productId = "5a53e366ccaf5729bdb5a5b1";
    Product.findOne({_id: productId})
        .then(product => {
            console.log(product);
        })
});
