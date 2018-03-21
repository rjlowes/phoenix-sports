import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchBasket} from 'modules/basket/basketActions';

class BasketPage extends Component {

	componentDidMount() {
		this.props.fetchBasket();
	}

	render() {
		return (
			<section className="t-basket">
				basket page...
			</section>
		);
	}
}

const mapStateToProps = state => ({
	basketItems: state.basket.items
});

export default connect(mapStateToProps, {fetchBasket})(BasketPage);
