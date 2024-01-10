import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import DetailsPage from "./pages/DetailsPage";
import Solutionspage from "./pages/Solutionspage";
import Servicespage from "./pages/Servicespage";
import { ThemeProvider, createTheme} from "@mui/material";
import "./App.css"


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Oswald, sans-serif',
      color:"white"
    }
    
  });

  return (
    <ThemeProvider theme={theme}>
    <Router>
    
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>   
      <Route exact path="/about" element={<About/>}/>   
      <Route exact path="/contact" element={<Contact/>}/>   
      <Route path="/details/:id" element={<DetailsPage/>}/>   
      <Route exact path="/solutions" element={<Solutionspage/>}/>   
      <Route exact path="/services" element={<Servicespage/>}/>   
      </Routes>
      <Footer/>

  </Router>
  </ThemeProvider>
  
  )
}

export default App
