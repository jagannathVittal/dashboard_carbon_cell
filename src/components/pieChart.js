import React from "react";

const PieChart = ({ data }) => {
    return (

        <div class="card">
            <div class="card-header">
                <h4 class="card-header-title">
                    Traffic Channels
                </h4>
            </div>
            <div class="card-body">
                <div class="chart chart-appended">
                </div>
                <div id="trafficChartLegend" class="chart-legend"><div>
                    <span class="chart-legend-item"><span class="chart-legend-indicator"></span>Direct</span><span class="chart-legend-item"><span class="chart-legend-indicator" ></span>Organic</span><span class="chart-legend-item"><span class="chart-legend-indicator"></span>Referral</span>
                </div>
                </div>
            </div>
        </div>

    )
}

export default PieChart