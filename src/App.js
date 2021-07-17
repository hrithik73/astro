import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import APOD from './pages/APOD'
import MarsRover from './pages/MarsRover';
import logo from "./assets/logo.png"
import "./App.css"
import { FaMoon, FaSun } from "react-icons/fa"

import { ThemeContext } from "./hooks/Provider"
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const App = () => {

  const theme = useContext(ThemeContext)

  return (
    <Router>
      <div className="App">
        <Toggle
          className="toggle"
          onChange={theme.setTheme}
          checked={theme.mode === "dark" ? true : false}
          icons={{ checked: <FaMoon size={10} color="yellow" />, unchecked: <FaSun size={10} color="yellow" /> }}
        />
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
//  checked: "🌙", unchecked: "🌕"