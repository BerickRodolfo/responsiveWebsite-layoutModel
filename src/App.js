import React from "react";
import { Navbar } from './components';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyles from './globalStyles';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar/>
      <Routes>
        <Route path='/' exactly element={<Home />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
