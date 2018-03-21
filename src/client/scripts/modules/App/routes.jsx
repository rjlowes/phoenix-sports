import React from 'react';
import {Route, IndexRoute, Switch} from 'react-router';

import HomePage from 'modules/home/pages/HomePage';

import ProductListPage from 'modules/catalogue/pages/ProductListPage';
import ProductDetailsPage from 'modules/catalogue/pages/ProductDetailsPage';

import LoginPage from 'modules/authentication/pages/LoginPage';
import RegisterPage from 'modules/authentication/pages/RegisterPage';

import BasketDetailsPage from 'modules/basket/pages/BasketDetailsPage';
import DeliveryAddressPage from 'modules/checkout/pages/DeliveryAddressPage';
import DeliveryOptionsPage from 'modules/checkout/pages/DeliveryOptionsPage';
import PaymentDetailsPage from 'modules/checkout/pages/PaymentDetailsPage';
import OrderConfirmationPage from 'modules/checkout/pages/OrderConfirmationPage';

// import CheckoutLayout from 'modules/checkout/components/CheckoutLayout';

// import AccountLayout from 'modules/account/components/AccountLayout';
import DashboardPage from 'modules/account/dashboard/pages/DashboardPage';
import AddressListPage from 'modules/account/addressbook/pages/AddressListPage';
import AddressCreatePage from 'modules/account/addressbook/pages/AddressCreatePage';
import AddressEditPage from 'modules/account/addressbook/pages/AddressEditPage';

// import PatternsLayout from 'modules/patterns/components/PatternsLayout';
import PatternsIndexPage from 'modules/patterns/pages/IndexPage';
import TypographyPage from 'modules/patterns/pages/TypographyPage';

export default (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/category/:categoryId" component={ProductListPage} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/basket" component={BasketDetailsPage} />
        <Route exact path="/checkout/delivery-address" component={DeliveryAddressPage} />
        <Route exact path="/checkout/delivery-options" component={DeliveryOptionsPage} />
        <Route exact path="/checkout/payment" component={PaymentDetailsPage} />
        <Route exact path="/checkout/confirmation" component={RegisterPage} />
        <Route exact path="/account" component={DashboardPage} />
        <Route exact path="/account/addressbook" component={AddressListPage} />
        <Route exact path="/account/addressbook/new" component={AddressCreatePage} />
        <Route exact path="/account/addressbook/:addressId/edit" component={AddressEditPage} />
        <Route exact path="/patterns" component={PatternsIndexPage} />
        <Route exact path="/patterns/typography" component={TypographyPage} />
    </Switch>
);
