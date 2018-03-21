'use strict';

var state = require('../controllers/state.controllers');

module.exports = (app) => {
    app.route('/api/state/initial')
        .get(state.initialState);
};

