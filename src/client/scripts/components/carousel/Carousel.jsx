import React, {Component} from 'react';
import CarouselItem from 'components/carousel/CarouselItem';

export default class Carousel extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let activeList = [...Array(this.props.data.length)].map((_, i) => {
            return i === 0;
        });

        this.setState({activeList: activeList});
    }

    componentDidMount() {
        this.setState({idx: 0});
        this.start();
    }

    start() {
        setInterval(() => {
            let activeList = this.state.activeList;
            let idx = this.state.idx;
            activeList[this.state.idx] = false;
            idx++;

            if(idx >= activeList.length) {
                idx = 0;
            }
            activeList[idx] = true;
            this.setState({idx: idx, activeList: activeList});
        }, 3000);
    }

    render() {
        return (
            <div className="c-carousel">
                <div className="c-carousel__item-list">
                    {this.props.data.map((item, i) => {
                        return <CarouselItem key={i} idx={i} mainImageUri={item} active={i === this.state.idx}  />
                    })}
                </div>
                <div className="c-carousel__nav"></div>
            </div>
        );
    }
}
