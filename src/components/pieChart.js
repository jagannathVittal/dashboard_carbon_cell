import React from "react";
import { Doughnut } from "react-chartjs-2";
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

        <div class="card">
            <div class="card-header">
                <h4 class="card-header-title">
                    Pie Chart
                </h4>
            </div>
            <div class="card-body d-flex justify-content-center align-items-center">
                <div class="chart">
                    <Doughnut data={chartData} />
                </div>
                <div className="d-sm-flex flex-column text-small d-none ">
                    {data?.map((elem, index) => {
                        return (
                            <span class="chart-legend-item ms-0">
                                <span class="chart-legend-indicator" style={{ backgroundColor: color[index] }}>
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