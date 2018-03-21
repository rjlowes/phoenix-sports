import React, {Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ProductCardPop from 'modules/catalogue/components/ProductCardPop';

const ProductListXX = ({products}) => {

    function run(isVisible) {
        console.log('run 2', isVisible);
    }

    return (
        <ul className="grid-products">
            {products.map((product, index) => (
                <li key={index}  className="grid-products__item">
                    <VisibilitySensor onChange={run}>
                        <ProductCard product={product} />
                    </VisibilitySensor>
                </li>))}
        </ul>
    );
};

// class AnimQueue {
//     constructor() {
//         this.queue = [];
//     }
//
//     push(item) {
//         this.queue.push(item);
//     }
// }

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.timer = 0;
    }

    runParent(isVisible) {
        console.log('PARENT run 2', isVisible);
        this.timer++;
        console.log(this.timer);
    }

    engage() {
        this.timer++;
        return this.timer;
    }

    disengage() {
        this.timer--;
        console.log('disengage ', this.timer);
    }

    render() {
        const {products} = this.props;

        return (
            <ul className="grid-products">
                {products.map((product, index) => {
                    return (
                        <ProductCardPop
                            key={index}
                            product={product}
                            engage={this.engage.bind(this)}
                            disengage={this.disengage.bind(this)}
                        />
                    )})}
            </ul>
        );
    }
}

export default ProductList;
