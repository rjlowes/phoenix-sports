import React, {Component} from 'react';
import {connect} from 'react-redux';
import PurchaseForm from 'modules/catalogue/components/PurchaseForm';
import {addToBasket} from 'modules/basket/basketActions';

class PurchaseFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedSku: ''};
    }

    componentDidRecieveProps() {
        const {product} = this.props;

        if(product && product.variants.length > 0) {
            this.setSku(product.variants[0].sku);
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const {addToBasket} = this.props;
        addToBasket('PRODUCT3_SKU3');
    }

    onChange(e) {
        console.log('onChange', e.target.value)
        this.setSku(e.target.value);
    }

    handleSizeChange(e) {
        console.log('handleSizeChange');
        console.log(arguments);
    }

    setSku(sku) {
        this.setState({'selectedSku': sku});
    }

    render() {
        const {product} = this.props;

        return (
            <PurchaseForm
                product={product}
                handleSizeChange={this.handleSizeChange.bind(this)}
                onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.catalogue.product
    };
};

export default connect(mapStateToProps, {addToBasket})(PurchaseFormContainer);
