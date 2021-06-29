import { useState } from 'react';
import axios from "axios"
import { API_KEY } from './API_KEY';

const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
// eslint-disable-next-line 
export default () => {
    const [data, setData] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const getData = async (date) => {
        console.log(API_URL + `&date=${date}`)
        try {
            const response = await axios.get(API_URL + `&date=${date}`)
            setData(response.data)
        }
        catch (error) {
            setErrorMessage("Something Went Wrong! Please Try Again")
        }
    }
    return [data, getData, errorMessage]

}