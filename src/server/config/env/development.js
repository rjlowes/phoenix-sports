'use strict';

module.exports = {
	db: {
		url: 'mongodb://localhost/rockstars-local',
		debug: true
	},
    express: {
        session: {
            secret: 'averybigsecret'
        }
    }
};
