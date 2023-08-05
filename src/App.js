import React from 'react'
// import Navbar from './Components/Navbar'
import './App.css'
import Home from './Components/Home'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Fitenss from './Components/Fitness'
import Bollywood from './Components/Bollywood'
import Technology from './Components/Technology'
import Hollywood from './Components/Hollywood'
import Food from './Components/Food.'
import CategoryDetail from './Components/CategoryDetail'
import Footer from './Components/Footer'

const App =() =>{
  return(
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/technology" element={< Technology />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/fitness" element={<Fitenss />} />
          <Route path="/food" element={<Food />} />
          <Route path="/details/:id" element={<CategoryDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App