import React from "react";
import LineChart from "./lineChart";
import PieChart from "./pieChart";

const Graph = ({ data }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-xl-6">
                    <LineChart data={data} />
                </div>
                <div className="col-12 col-xl-6">
                    <PieChart data={data} />
                </div>
            </div>
        </>
    )
}

export default Graph