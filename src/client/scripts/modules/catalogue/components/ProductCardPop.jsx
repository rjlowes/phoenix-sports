import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import ProductCard from 'modules/catalogue/components/ProductCard';

class ProductCardPop extends Component {

    constructor(props) {
        super(props);

        this.state = {visible: false, active: true};
    }

    run(isVisible) {
        console.log('is in viewport', isVisible);
        // this.setState({visible: true, active: false});
        // return;

        // const count = this.props.engage();
        // console.log('count ', count);
        // setTimeout(() => {
        //     this.setState({visible: true, active: false});
        //     this.props.disengage();
        // }, count * 200);

        if(isVisible) {
            const count = this.props.engage();
            // console.log('count ', count);
            setTimeout(() => {
                this.setState({visible: true, active: false});
                this.props.disengage();
            }, count * 200);
        }
    }

    render() {
        const {product} = this.props;
        const visibleClass = !this.state.visible ? ' shrinkable' : '';

        return (
            <VisibilitySensor onChange={this.run.bind(this)} active={this.state.active} offset={{bottom: 100}}>
                <li className={`animate grid-products__item${visibleClass}`}>
                    <ProductCard product={product} />
                </li>
            </VisibilitySensor>
        );
    }
}

export default ProductCardPop;
