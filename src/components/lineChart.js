import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
const LineChart = ({ data }) => {
    const chartData = {
        labels: data.map((elem) => elem?.Year),
        datasets: [
            {
                label: "Population Info of United States",
                data: data.map((elem) => elem?.Population),
                borderColor: "rgb(172, 210, 79)",
                tension: 0.1,
                color: 'yellow'
            }
        ]
    };

    const options = {
        scales: {

            x: {
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Year',
                    color: 'white'

                },
                ticks: {
                    color: "rgb(172, 210, 79)",
                }
            },
            y: {
                grid: {
                    color: '#213b21'
                },
                title: {
                    display: true,
                    text: 'Population',
                    color: 'white'
                },
                ticks: {
                    color: "#b9f7b9",
                },
            }
        }
    }
    return (

        <div class="card">
            <div class="card-header">
                <h4 class="card-header-title">
                    Line Chart
                </h4>
            </div>
            <div class="card-body">
                <div class="chart d-flex justify-content-center align-items-center">
                    <Line data={chartData} options={options} />
                </div>
            </div>
        </div>

    )
}
export default LineChart