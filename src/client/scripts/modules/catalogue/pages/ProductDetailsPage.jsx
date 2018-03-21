import React, {Component} from 'react';
import {connect} from 'react-redux';

import ImageGallery from 'modules/catalogue/components/ImageGallery';
import ProductDetails from 'modules/catalogue/components/ProductDetails';
import PurchaseFormContainer from 'modules/catalogue/components/PurchaseFormContainer';
import ProductFeatures from 'modules/catalogue/components/ProductFeatures';
import ProductSpec from 'modules/catalogue/components/ProductSpec';
import PopoutMod from 'components/mods/PopoutMod';
import {fetchProduct} from 'modules/catalogue/catalogueActions';



class ProductDetailsPage extends Component {

    componentDidMount() {
        const productId = this.props.match.params.productId;
        this.props.fetchProduct(productId);
    }

    render() {
        const {product} = this.props;

        return (
            <article itemScope itemType="http://schema.org/Product" className="t-prod">
                <section className="t-prod__primary-grid">
                    <div className="t-prod__gallery t-prod__gallery--desktop">
                        <ImageGallery src="/images/catalogue/products/placeholder/cool-miler_1.jpg" />
                    </div>
                    <div className="t-prod__summary">
                        <ProductDetails product={product} />
                        <div className="t-prod__gallery-mobile">
                            <ImageGallery src="/images/catalogue/products/placeholder/cool-miler_1.jpg" />
                        </div>
                        <div className="t-prod__purchase">
                            <div className="mod mod--top">
                                <PopoutMod heading="Colour">
                                    <ul className="list-colours">
                                        <li className="list-colours__item list-colours__item--red"></li>
                                        <li className="list-colours__item list-colours__item--blue"></li>
                                        <li className="list-colours__item list-colours__item--yellow list-colours__item--selected"></li>
                                        <li className="list-colours__item list-colours__item--black"></li>
                                    </ul>
                                </PopoutMod>
                                <PurchaseFormContainer product={product} />
                                {/*}
                                <button className="heart"></button>*/}
                            </div>
                        </div>

                        <div>
                            <h2>Product Details</h2>
                            <p>The Nike Cool Miler Men's Short-Sleeve Running Top is made with sweat-wicking mesh to help keep you dry, comfortable and cool, mile after mile.</p>
                        </div>
                        <div className="mod">
                            <h3>Features</h3>
                            <ul className="list-std">
                                <li className="list-std__item">Dri-FIT Technology helps keep you dry and comfortable</li>
                                <li className="list-std__item">Closed mesh construction for breathability</li>
                                <li className="list-std__item">Open mesh panels run from shoulder to neck for added cooling</li>
                                <li className="list-std__item">Flat seams feel smooth against your skin</li>
                                <li className="list-std__item">Reflective details help you stand out</li>
                            </ul>
                        </div>
                        <div className="mod">
                            <h3>Product Spec</h3>
                            <ul className="list-std">
                                <li className="list-std__item">Fabric: 100% polyester</li>
                                <li className="list-std__item">Machine wash</li>
                                <li className="list-std__item">Imported</li>
                                <li className="list-std__item">Colour shown: Obsidian/Heather/Binary Blue</li>
                                <li className="list-std__item">Style: 892994-474</li>
                            </ul>
                        </div>
                        <div className="mod mod--top">
                            <ul className="list-bullet">
                                <li className="list-bullet__item">Standard delivery typically within 3 days</li>
                                <li className="list-bullet__item">Next day delivery available</li>
                                <li className="list-bullet__item">28 days return policy</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/*
                <div>
                    <ProductSpec />
                    <ProductFeatures />
                </div>*/}
            </article>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.catalogue.product
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.productId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
