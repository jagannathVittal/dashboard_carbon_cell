import React, { useState, useEffect } from "react";
import { getCryptoCurrencyData } from "../api/helper";
import Spinner from "../components/spinner";
import BitCoinCard from "../components/bitCoinCard";
const Trade = () => {
    const [spinner, setSpinner] = useState([])
    const [bitData, setBitData] = useState([])
    useEffect(() => {
        callCryptoCurrencyInfo()
    }, [])

    const callCryptoCurrencyInfo = async () => {
        setSpinner(true)
        const res = await getCryptoCurrencyData()
        setBitData(res?.bpi)
        setSpinner(false)
    }

    return (
        <div className="container-fluid">
            <Spinner show={spinner}>
                <BitCoinCard data={bitData} />
            </Spinner>
        </div>
    )
}

export default Trade

