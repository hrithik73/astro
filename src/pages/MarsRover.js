import React, { useEffect, useState } from 'react';
import "../App.css"

import {
 isMobile
} from "react-device-detect"
import { useAPI } from "../apis/useApi"
import { formateDate } from "../utils/UtilFunctions"
import InfiniteList from '../components/InfiniteList'
import DatePicker from '../components/DatePicker'
import NotLoaded from '../components/NotLoaded'
import MobileRender from '../components/MobileRender'
import Footer from '../components/Footer'



const MarsRover = () => {
 const today = formateDate(new Date())

 const [data, getData] = useAPI()
 const [date, setDate] = useState(today)
 const earthdate = formateDate(date)

 useEffect(() => {
  getData(null, earthdate, today, 1)
  // eslint-disable-next-line 
 }, [date])

 const dateChangeHandler = (date) => {
  setDate(date)
 }
 if (!data)
  return <NotLoaded />

 return (
  <div className="App" >
   <h3 className="header">Mars Rover Gallery </h3>
   <h3 className="date">{earthdate}</h3>
   <DatePicker date={date} today={today} dateChangeHandler={dateChangeHandler} />
   <p className="explanation" >You can surf the images sent from mars by date with details of ROVER with Camera Name !! By Default It will Show all the images   </p>
   {isMobile ? <MobileRender /> : (<div className="list-cnt" >
    <InfiniteList initialData={data.photos} earthDate={earthdate} today={today} date={date} />
   </div>)}
   <Footer />
  </div>
 )

}

export default MarsRover

