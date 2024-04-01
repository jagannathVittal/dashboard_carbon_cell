import React from "react";

const BitCoinCard = ({ data }) => {
    return (
        <>
            <div class="row py-4">
                {Object.keys(data)?.map((elem) => {
                    return (
                        <div class="col-12 col-lg-6 col-xl">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row align-items-center gx-0">
                                        <div class="col">
                                            <h6 class="text-uppercase text-body-secondary mb-2">
                                                <span className="carbon_light_green_text"> {data[elem]?.description}</span>
                                            </h6>
                                            <span class="h2 mb-0" dangerouslySetInnerHTML={{ __html: `${data[elem]?.rate} ${data[elem]?.symbol}` }}></span>
                                        </div>
                                        <div class="col-auto">
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