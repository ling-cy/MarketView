import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CanvasJSReact from './assets/canvasjs.stock.react';
let CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const risingColor = '#2a9d8f';
const fallingColor = '#e63946';

const CanvasjsDayChart = (props) => {
    const { stockData } = props;
    const { darkTheme } = useSelector(state => ({
        darkTheme: state.theme.darkMode,
    }));
    const [dataPoints1, setDataPoints1] = useState([]);
    const [dataPoints2, setDataPoints2] = useState([]);
    const [dataPoints3, setDataPoints3] = useState([]);
    const [isLoaded, setIsloaded] = useState(false);
    const [lineBreak, setLineBreak] = useState([]);
    const [ma, setMa] = useState([]);

    useEffect(() => {

        //set data from props to variables
        const loadData = (sData) => {
            let dps1 = [], dps2 = [], dps3 = [];
            sData.forEach(data => {
                dps1.push({
                    x: new Date(data.date),
                    y: [
                        Number(data.open),
                        Number(data.high),
                        Number(data.low),
                        Number(data.close)
                    ],
                });
                dps2.push({ x: new Date(data.date), y: Number(data.volume) });
                dps3.push({ x: new Date(data.date), y: Number(data.close) });
                return;
            });

            //set color to the data
            const changeBorderColor = (data) => {
                for (let i = 0; i < data.length; i++) {
                    data[i].color = (data[i].y[0] <= data[i].y[3]) ? risingColor : fallingColor;
                }
            };
            changeBorderColor(dps1);

            //set variables to the state

            setIsloaded(true);
            setDataPoints1(dps1);
            setDataPoints2(dps2);
            setDataPoints3(dps3);


            //create break data and set it into state
            const addbreaks = (data) => {
                const customBreaks = [];
                for (let i = 1; i < data.length; i++) {
                    const diffBetweenDps = Date.parse(data[i].x) - Date.parse(data[i - 1].x);
                    if (diffBetweenDps > (24 * 60 * 60 * 1000)) {
                        const startValue = new Date(Date.parse(data[i - 1].x) + (24 * 60 * 60 * 1000));
                        const endValue = data[i].x;
                        customBreaks.push({
                            startValue: startValue,
                            endValue: endValue,
                            spacing: 0,
                            lineThickness: 0,
                        })
                    }
                };

                setLineBreak(customBreaks)
            };
            addbreaks(dps1)

            //function for moving average
            const sma = (dps, num, name, color) => {
                const result = []

                if (dps.length <= num) return [];
                for (let i = num; i < dps.length; i++) {
                    let total = 0;
                    for (let j = (i - num); j < i; j++) {
                        total += dps[j].y[3];
                    }
                    result.push({
                        x: dps[i].x,
                        y: total / num,
                        toolTipContent: null,
                    })
                }
                return {
                    type: 'spline',
                    markerSize: 0,
                    name: name,
                    dataPoints: result,
                    showInLegend: true,
                    lineThickness: 1.5,
                    legendText: name,
                    color: color,

                };
            }
            const maLine = [
                sma(dps1, 5, 'MA5', '#f39237'),
                sma(dps1, 10, 'MA10', '#40bcd8'),
                sma(dps1, 20, 'MA20', '#b388eb'),
                sma(dps1, 30, 'MA30', '#1c77c3'),
                sma(dps1, 60, 'MA60', '#97d8c4'),
            ]

            setMa(maLine);
        };
        loadData(stockData)
        return () => {
            setDataPoints1([]);
            setDataPoints2([]);
            setDataPoints3([]);
            setIsloaded(false);
            setLineBreak([]);
            setMa([]);
        };
    }, [stockData]);


    const gridColor = darkTheme === false ? '#ced4da' : '#939597';
    const yAxisDetail = {
        labelFontColor: darkTheme === false ? 'black' : 'white',
        labelFontFamily: 'roboto',
        labelBackgroundColor: darkTheme === false ? 'rgb(0,0,0,0.1)' : 'rgb(0,0,0,0.4)',
        tickLength: 0,
        gridDashType: 'dash',
        labelPlacement: 'inside',
        tickPlacement: 'inside',
        margin: 0,
        gridColor: gridColor,
    }

    const renderTheme = () => {
        return darkTheme === false ? 'bright2' : 'dark1';
    }

    const options = {
        theme: renderTheme(),

        charts: [{
            axisX: {
                lineThickness: 3,
                tickLength: 0,
                lineColor: gridColor,
                labelFormatter: (e) => {
                    return '';
                },
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    color: darkTheme === false ? 'black' : 'white',
                    labelFormatter: (e) => {
                        return '';
                    },
                },
                scaleBreaks: {
                    type: "straight",
                    fillOpacity: 1,
                    customBreaks: [
                        ...lineBreak
                    ]
                },
            },
            axisY: {
                ...yAxisDetail,
                prefix: '$',
                // labelAngle: 345,
                labelFontWeight: 500,

                crosshair: {
                    enabled: true,
                    labelFontSize: 10,
                    labelFontFamily: 'roboto',
                    color: darkTheme === false ? 'black' : 'white',
                },
            },
            toolTip: {
                shared: true,
                fontFamily: 'Roboto',
                fontSize: 12,
                frontWeight: 300,
                backgroundColor: darkTheme === false ? 'rbg(255,255,255,0.7)' : 'rgb(42,42,42,0.8)',
            },
            legend: {
                dockInsidePlotArea: true,
                verticalAlign: 'top',
                horizontalAlign: 'center',
                fontFamily: 'roboto',
                fontSize: 11,
                fontWeight: '350',
                // itemclick: (e) => {
                //     if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                //         e.dataSeries.visible = false;
                //     } else {
                //         e.dataSeries.visible = true;
                //     }
                //     chart.render();
                // },
                itemTextFormatter: (e) => {
                    return ''
                }
            },
            data: [{
                name: 'Price (in USD)',
                yValueFormatString: '$#,###.##',
                type: 'candlestick',
                dataPoints: dataPoints1,
                risingColor: darkTheme === false ? 'white' : '#2a2a2a',
                fallingColor: fallingColor,
            },
            ...ma],

        }, {
            height: 100,
            axisX: {
                title: 'Volume',
                labelFontFamily: 'roboto',
                labelFontSize: 10,
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    labelFontFamily: 'roboto',
                    color: darkTheme === false ? 'black' : 'white',
                },
                scaleBreaks: {
                    type: "straight",
                    fillOpacity: 0,
                    customBreaks: [
                        ...lineBreak
                    ]
                },
                labelFormatter: (e) => {
                    return '';
                },
                labelAngle: -20
            },
            axisY: {
                // prefix: '$',
                // tickLength: 0,
                // gridDashType: 'dash',
                // gridColor: gridColor,
                // labelPlacement: 'inside',
                // tickPlacement: 'inside',
                // labelFontColor: 'white',
                // labelBackgroundColor: 'rgb(0,0,0,0.4)',
                ...yAxisDetail,
                prefix: '$',
                labelFormatter: (e) => {
                    if (e.value > 1000000) {
                        return e.value / 1000000 + 'M';
                    } else if (e.value > 1000000) {
                        return e.value / 1000000 + 'M';
                    } else if (e.value > 1000) {
                        return e.value / 1000 + 'K';
                    } else return e.value;
                },
            },
            toolTip: {
                shared: true,
                fontFamily: 'Roboto',
                fontSize: 12,
                frontWeight: 300,
                backgroundColor: darkTheme === false ? 'rbg(255,255,255,0.7)' : 'rgb(42,42,42,0.8)',
            },
            data: [{
                name: 'Volume',
                yValueFormatString: '$#,###.##',
                type: 'column',
                color: '#f5cb5c',
                dataPoints: dataPoints2
            }]
        }],
        navigator: {

            height: 40,
            dynamicUpdate: false,
            slider: {
                maskColor: 'grey',
                maskOpacity: .3,
                handleHeight: 25,
            },
            data: [{
                type: 'line',
                markerSize: 0,
                dataPoints: dataPoints3,
                color: '#275dad',
            }],
            axisX: {
                interval: 3,
                intervalType: 'month',
                ...yAxisDetail,
                // labelFontFamily: 'roboto',
                // labelFontColor: 'white',
                // labelFontSize: 11,
                // labelBackgroundColor: 'rgb(0,0,0,0.6)',
                // labelFontWeight: '300',
                labelFormatter: (e) => {
                    return CanvasJS.formatDate(e.value, "MMM YY");
                },
                scaleBreaks: {
                    type: 'straight',
                    fillOpacity: 1,
                    customBreaks: [
                        lineBreak
                    ]
                },
            },
        },
        rangeSelector: {
            label: '',
            selectedRangeButtonIndex: 2,
            buttons: [{
                range: 1,
                rangeType: 'month',
                label: '1M'
            }, {
                range: 3,
                rangeType: 'month',
                label: '3M'
            }, {
                range: 6,
                rangeType: 'month',
                label: '6M'
            }, {
                rangeType: 'ytd',
                label: 'YTD'
            }, {
                range: 1,
                rangeType: "year",
                label: "1Y"
            }, {
                rangeType: 'all',
                label: 'All' //Change it to "All"
            }],
            buttonStyle: {
                backgroundColorOnHover: 'rgba(0, 0, 0, 0.0)',
                backgroundColorOnSelect: 'rgba(0, 0,0 , 0.5)',
                backgroundColor: 'rgba(0, 0, 0, 0.0)',
                borderThickness: 0,
                labelFontColor: '#8d99ae',
                labelFontColorOnHover: '#e9ecef',
                labelFontSize: 11,
                labelFontStyle: 'bold',
                labelFontFamily: 'roboto',
            },
            inputFields: {
                style: {
                    fontSize: 10,
                    fontColor: '#8d99ae',
                    fontFamily: 'roboto',
                    fontStyle: 'bold',
                    borderThickness: 0,
                    padding: { left: 2, right: 2, top: 1, bottom: 1 },
                    backgroundColor: 'rgba(0, 0,0 , 0)',
                },
            },
        },
        animationEnabled: true,
        animationDuration: 300,
    };
    const containerProps = {
        maxWidth: '1000px',
        width: '100%',
        height: '500px',
        margin: 'auto'
    };
    return (
        <div>

            {
                isLoaded &&
                <CanvasJSStockChart containerProps={containerProps} options={options}
                // onRef={ref => chart = ref}
                />
            }

        </div>
    );

}

export default CanvasjsDayChart; 