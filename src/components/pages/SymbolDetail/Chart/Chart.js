import React from 'react';
import { connect } from 'react-redux';
import { fetchDayChart } from '../../../../actions';
import CanvasjsDayChart from './CanvasjsDayChart';



class Chart extends React.Component {

    componentDidMount() {
        this.props.fetchDayChart(this.props.symb);
    }

    renderStockDetail() {
        const stock = this.props.stock;

        if (!stock || stock === 'undefined') {
            return 'Loading...'
        }
        return (
            <CanvasjsDayChart
                stockData={this.props.stock}
            />
        )
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
    return { stock: state.stock.dayChart }
}

export default connect(
    mapStateToProps,
    { fetchDayChart }
)(Chart);