// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    if (darkMode){
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  }, [darkMode])
  return (
    <>
      <div className="">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Blogs/>
        <SocialLinks/>
        <Footer/>
      </div>

    </>
  );
}

export default App;
