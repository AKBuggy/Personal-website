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
  return (
    <>
      <div>
        <Navbar />
        <Home/>
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
