'use strict';

/**
 * Provides initial state to Redux
 */
module.exports.initialState = (req, res) => {
    let state = {};

    if(req.user) {
        state.authentication = {
            customer: req.user.getSafeCustomer()
        };
    }

    res.json(state);
};