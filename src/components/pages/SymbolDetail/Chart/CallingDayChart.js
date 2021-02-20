import React from 'react';
import { connect } from 'react-redux';
import { fetchDayChart } from '../../../../actions';
import DayChart from './DayChart';



class CallingDayChart extends React.Component {
    state = { hasError: null }

    componentDidMount() {
        this.props.fetchDayChart(this.props.symb);
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
            <DayChart
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
    return { stock: state.stock.dayChart }
}

export default connect(
    mapStateToProps,
    { fetchDayChart }
)(CallingDayChart);