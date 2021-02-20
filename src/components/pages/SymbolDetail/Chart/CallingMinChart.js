import React from 'react';
import { connect } from 'react-redux';
import { fetchMinChart } from '../../../../actions';
import MinChart from './MinChart';



class CallingMinChart extends React.Component {
    state = { hasError: null }

    componentDidMount() {
        this.props.fetchMinChart(this.props.symb);
    }

    renderStockDetail() {
        // try {
        const stock = this.props.stock;

        if (!stock || stock === 'undefined') {
            return 'Loading...'
        } if (this.state.hasError) {
            return 'There is not enough data to generate a day chart'
        }
        return (
            <MinChart
                stockData={this.props.stock}
            />
        )
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {
        return (
            <div>
                {this.renderStockDetail()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { stock: state.stock.minChart }
}

export default connect(
    mapStateToProps,
    { fetchMinChart }
)(CallingMinChart);