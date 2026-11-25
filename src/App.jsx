import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Work from "./components/Work";
import Loader from "./components/Loader"



function App() {
  
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Show ONLY loader while loading
  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Hero/>} />
        <Route path="/About" element = {<About/>} />
        <Route path="/skills" element = {<Skills/>} />
        <Route path="/work" element = {<Work/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;