import React from "react";
import { Navbar, Footer } from './components/';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GlobalStyles from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products.js';
import SignUp from './pages/SignUp/SignUp.js';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>   
    </>  
  );
}

export default App;
