import React, { useState, useEffect } from "react";
import 'date-fns'


import ReactPlayer from 'react-player'

import DatePicker from '../components/DatePicker'
import { useAPI } from "../apis/useApi";
import NotLoaded from "../components/NotLoaded";
import Image from "../components/ImageContainer";
import "../App.css"
import Footer from "../components/Footer";

import { formateDate } from "../utils/UtilFunctions"


const APOD = () => {

 const today = formateDate(new Date())
 const [data, getData, errorMessage] = useAPI()
 const [date, setDate] = useState(today)
 const newDate = formateDate(date)

 useEffect(() => {
  getData(newDate, null);
  // eslint-disable-next-line 
 }, [date]);


 const dateChangeHandler = (date) => {
  setDate(date)
 }


 if (!data) {
  return <NotLoaded errorMessage={errorMessage} />;
 }

 return (
  <div className="App">
   <h3 className="header">Astronomy Picture Of The Day</h3>
   <h3 className="date">{newDate}</h3>

   <DatePicker
    date={date}
    today={today}
    dateChangeHandler={dateChangeHandler}
   />

   {data.media_type === "image" ?
    <Image originalImageSrc={data.hdurl} smallImageSrc={data.url} />
    : <ReactPlayer playing style={{ padding: "10px" }} url={data.url} />
   }
   <h3 className="title">{data.title}</h3>
   <p className="explanation">{data.explanation}</p>
   <Footer />
  </div>
 );
};
export default APOD;
