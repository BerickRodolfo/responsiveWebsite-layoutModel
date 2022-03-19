import React from "react";
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GlobalStyles from './globalStyles'
import  Home  from '../src/pages/HomePage/Home'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router>
     
  );
}

export default App;
