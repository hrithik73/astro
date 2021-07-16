import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
 MuiPickersUtilsProvider,
 KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';



const DatePicker = ({ date, today, dateChangeHandler }) => {
 return (
  <div>
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
      onChange={(date) => dateChangeHandler(date)}
      KeyboardButtonProps={{
       'aria-label': 'change date',
      }}
     />
    </Grid>
   </MuiPickersUtilsProvider>
  </div>
 )
}

export default DatePicker
