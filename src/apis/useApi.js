import { useState } from 'react';
import axios from "axios"
import { API_KEY } from './API_KEY';

export const useAPI = () => {
    const [data, setData] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const getData = async (newDate, earthDate, today, page) => {

        const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${newDate}`

        const checkDate = earthDate === today ? "sol=1000" : `earth_date=${earthDate}`

        const MARS_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${checkDate}&api_key=${API_KEY}&page=${page}`
        const FINAL_URL = earthDate == null ? APOD_URL : MARS_URL
        try {
            const response = await axios.get(FINAL_URL)
            setData(response.data)
        }
        catch (error) {
            // console.error(errorMessage)
            setErrorMessage("Something Went Wrong! Please Try Again")
        }
    }

    return [data, getData, errorMessage]

}