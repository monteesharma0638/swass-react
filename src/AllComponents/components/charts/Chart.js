import React from 'react'
// import { createChart,  CrosshairMode } from 'lightweight-charts'; 
import { fetchChartData } from '../../allfunction/FetchFunctions';


export default function Chart() {
    
    React.useEffect(()=>{
        fetchChartData()
        .then(chartData=>{
            var chart = window.LightweightCharts.createChart(document.getElementById("chart"), {
        
                layout: {
                    backgroundColor: '#000000',
                    textColor: 'rgba(255, 255, 255, 0.9)',
                },
                grid: {
                    vertLines: {
                        color: 'rgba(197, 203, 206, 0.5)',
                    },
                    horzLines: {
                        color: 'rgba(197, 203, 206, 0.5)',
                    },
                },
                crosshair: {
                    mode: window.LightweightCharts.CrosshairMode.Magnet,
                },
                rightPriceScale: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                },
                timeScale: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                    timeVisible: true,
                    secondsVisible: false,
                    barSpacing: 6
                }
            });
            
            var candleSeries = chart.addCandlestickSeries({
            //   upColor: 'rgba(255, 144, 0, 1)',
            //   downColor: '#000',
            //   borderDownColor: 'rgba(255, 144, 0, 1)',
            //   borderUpColor: 'rgba(255, 144, 0, 1)',
            //   wickDownColor: 'rgba(255, 144, 0, 1)',
            //   wickUpColor: 'rgba(255, 144, 0, 1)',
            });
            
            candleSeries.setData(chartData);
        })
        .catch(console.log)
    })

    return (
        <div id="chart" style={{height: 500, width: 1000}}>
            
        </div>
    )
}
