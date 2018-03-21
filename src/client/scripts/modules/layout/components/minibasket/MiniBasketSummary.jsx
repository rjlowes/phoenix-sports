import React, {Component} from 'react';
import {connect} from 'react-redux';
import MiniBasket from 'modules/layout/components/minibasket/MiniBasket';
import {fetchBasket} from 'modules/basket/basketActions';

class MiniBasketSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {show: false};
    }

    componentDidMount() {
        this.props.fetchBasket();
    }

    toggle() {
        const {show} = this.state;

        this.setState({show: !show});
    }

    renderDetail() {
        if(this.state.show) {
            return (
                <div className="minibasket-summary__content">
                    <MiniBasket basketItems={this.props.basket.items}/>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="minibasket-summary">
                <div className="minibasket-summary__header" onClick={this.toggle.bind(this)}>
                    <img src="/svg/shopping-basket.svg" width="40"/>
                </div>
                {this.renderDetail()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        basket: state.basket
    };
};

export default connect(mapStateToProps, {fetchBasket})(MiniBasketSummary);
