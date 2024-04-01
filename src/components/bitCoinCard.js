import React from "react";

const BitCoinCard = ({ data }) => {
    return (
        <>
            <div className="row py-4">
                {Object.keys(data)?.map((elem, index) => {
                    return (
                        <div className="col-12 col-lg-6 col-xl" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center gx-0">
                                        <div className="col">
                                            <h6 className="text-uppercase text-body-secondary mb-2">
                                                <span className="carbon_light_green_text"> {data[elem]?.description}</span>
                                            </h6>
                                            <span className="h2 mb-0" dangerouslySetInnerHTML={{ __html: `${data[elem]?.rate} ${data[elem]?.symbol}` }}></span>
                                        </div>
                                        <div className="col-auto">
                                            <span > {data[elem]?.code} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BitCoinCard