import axios from "axios"
import { toast } from 'react-toastify';
export const getGraphData = async () => {
    return await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((response) => { return response.data }).catch(() => {
        toast.error('Oops There is Error, Please Contact Admin')
    })
}

export const getCryptoCurrencyData = async () => {
    return await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => { return response.data }).catch(() => {
        toast.error('Oops There is Error, Please Contact Admin')
    })
}