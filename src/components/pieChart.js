import React from "react";
import { Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import Chart from 'chart.js/auto';
const PieChart = ({ data }) => {
    const color = [
        '#E6FFE6',
        '#CCFFCC',
        '#B3FFB3',
        '#99FF99',
        '#80FF80',
        '#66FF66',
        '#4DFF4D',
        '#33FF33',
        '#00ff00'
    ]
    const chartData = {
        labels: data.map((elem) => elem?.Year),
        datasets: [
            {
                label: "Population Info of UnitedStates",
                data: data.map((elem) => elem?.Population),
                backgroundColor: color,
                borderColor: [
                    '#0b0b0b'
                ],
                borderWidth: 1,
            }
        ]
    };


    return (

        <div className="card">
            <div className="card-header">
                <h4 className="card-header-title">
                    Pie Chart
                </h4>
            </div>
            <div className="card-body d-flex justify-content-center align-items-center">
                <div className="chart">
                    <Doughnut data={chartData} />
                </div>
                <div className="d-sm-flex flex-column text-small d-none ">
                    {data?.map((elem, index) => {
                        return (
                            <span className="chart-legend-item ms-0 py-1" key={elem?.Year} style={{ fontSize: 'smaller' }}>
                                <span className="chart-legend-indicator" style={{ backgroundColor: color[index] }}>
                                </span>{elem?.Year} - {(elem?.Population / 10000000).toFixed(2) + " Cr"}
                            </span>
                        )
                    })
                    }
                </div>

            </div>
        </div>

    )
}

export default PieChart