import React from 'react'
// import Navbar from './Components/Navbar'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Routing from './Routing/Routing'



const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routing />
     
      </Router>
    </>
  )
}

export default App