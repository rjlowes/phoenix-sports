'use strict'

// class BasketItem {
//     constructor(variant, qty = 0) {
//         if(!variant) {
//             throw new Error('No variant provided');
//         }
//
//         this.variant = variant;
//         this.qty = qty;
//     }
// }

class BasketService {
    createBasket() {
        return {
            items: []
        };
    }

    save(session, basket) {
        session.basket = basket;
    }

    getBasket(session) {
        const {basket} = session;

        return basket ? basket : this.createBasket();
    }

    getItem(session, sku) {
        const basket = this.getBasket(session);

        return basket.items.find(item => {
            return item.variant.sku === sku;
        });
    }

    containsItem(basket, sku) {
        return basket.items.findIndex(item => {
            return item.variant.sku === sku;
        });
    }

    addItem(session, variant, qty = 1) {
        const basket = this.getBasket(session);
        const index = this.containsItem(basket, variant.sku);

        if(index !== -1) {
            const item = basket.items[index];
            item.qty += qty;
            basket.items[index] = item;
            this.save(session, basket);
        } else {
            basket.items.push({variant: variant,qty: qty});
            this.save(session, basket);
        }
    }

    incrementQty(variant, qty) {

    }

    decrementQty(variant, qty) {

    }

    removeLineItem(variant) {

    }
}

module.exports = BasketService;

// module.exports = BasketSession;




// module.exports.createBasket = () => {
//     return {
//         basketItems: []
//     };
// };
//
//
// module.exports.getBasket = (session) => {
//     const basket = session.basket;
//     if(basket) {
//         return basket;
//     }
//
//     return this.createBasket();
// };
//
//
// module.exports.addItem = (session, sku, qty) => {
//     let item = this.getItem(sku);
// };
//
// module.exports.getItem = (session, sku) => {
//     const basket = this.getBasket(session);
//
// };
