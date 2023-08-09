import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Test from "./pages/Test";
function App() {
  return (
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />      
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="/test" element={<Test />} />                  
                 
          </Routes>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;

