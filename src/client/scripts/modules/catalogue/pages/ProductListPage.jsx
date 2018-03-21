import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from 'modules/catalogue/components/ProductList';
import CategoryHeader from 'modules/catalogue/components/CategoryHeader';
import { fetchProducts, fetchCategory } from 'modules/catalogue/catalogueActions';


class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategory();
    }

    render() {
        const { category, products } = this.props;

        return (
            <section className="t-catalogue-list">
                <div className="t-catalogue-list__row-main">
                    <nav className="t-catalogue-list__sidebar">
                        filters and stuff
                    </nav>
                    <div className="t-catalogue-list__main">
                        <CategoryHeader category={category} count="10" />
                        <ProductList products={products} />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.catalogue.category,
        products: state.catalogue.products
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchCategory: () => dispatch(fetchCategory(ownProps.match.params.categoryId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
