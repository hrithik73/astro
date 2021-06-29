import React, { useState, useEffect } from "react";
// import Skeleton from 'react-loading-skeleton';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

import ReactPlayer from 'react-player'

import logo from "./assets/logo.jpg";
import useApi from "./apis/useApi";
import NotLoaded from "./components/NotLoaded";
import Image from "./components/ImageContainer";
import "./App.css"
import Footer from "./components/Footer";

const formateDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [year, month, day].join('-');
}


const App = () => {

  const today = new Date()
  const [data, getData, errorMessage] = useApi()
  const [date, setDate] = useState(today)
  const newDate = formateDate(date)

  // console.log(loaded)

  useEffect(() => {
    getData(newDate);
    // eslint-disable-next-line 
  }, [date]);


  if (!data) {
    return <NotLoaded errorMessage={errorMessage} />;
  }
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <h3 className="header"> Astronomy Picture Of The Day</h3>
      <h3 className="date">{newDate}</h3>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Pick a Date"
            value={date}
            maxDate={today}
            onChange={(date) => setDate(date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

      {/* {!loaded && <Skeleton count={5} />} */}
      {data.media_type === "image" ?
        <Image originalImageSrc={data.hdurl} smallImageSrc={data.url} />
        : <ReactPlayer playing style={{ padding: "10px" }} url={data.url} />}
      <h3 className="title">{data.title}</h3>
      <p className="explanation">{data.explanation}</p>

      <Footer />
    </div>
  );
};
export default App;
