import React from 'react';
import Header from 'modules/layout/components/Header';
import Footer from 'modules/layout/components/footer/Footer';

import {Route, Switch} from 'react-router';

// TODO Should be passed in as children!
import routes from 'modules/App/routes';

const Layout = () => {
    return (
        <div className="global-container">
            <Header />
            <main>
                {routes}
            </main>
            <Footer />
            <div className="g-screen"></div>
        </div>
    );
};

export default Layout;
