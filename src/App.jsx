import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from './views/Home/Home';
import About from './views/About/About';
import Header from './components/Header/Header'

import './global.css'

function App() {

  return (
    <div className="App">
       <Router>
          <Header/>
          <HomePage/>
          <About/>
       </Router>
    </div>
  )
}

export default App
