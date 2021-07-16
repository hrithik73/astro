import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import APOD from './pages/APOD'
import MarsRover from './pages/MarsRover';
import logo from "./assets/logo.jpg"
import "./App.css"

const App = () => {

  return (
    <Router>
      <div className="App">
        <img className="logo" src={logo} alt="logo" />
        <div>
          <Link to="/">APOD</Link>{" "}
          <Link to="/MarsRover">Mars Rover Gallery</Link>
        </div>

        <Switch>
          <Route path="/" exact >
            <APOD />
          </Route>
          <Route path="/MarsRover">
            <MarsRover />
          </Route>
        </Switch>
      </div>
    </Router >
  )
}

export default App
