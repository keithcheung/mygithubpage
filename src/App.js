import React from "react";
import "./css/App.css";
import "./css/Star.css";
import "./css/Arrowdown.css";
import Title from "./js/components/title";
import About from "./js/components/about";
import Experience from "./js/components/experience";
import Contact from "./js/components/footer";

function App() {
  return (
    <div className="App">
      <div className="item">
        <Title />
      </div>
      <div className="item" data-aos="fade-down">
        <About />
      </div>
      <div className="item" data-aos="fade-right">
        <Experience />
      </div>
      <div className="item" data-aos="fade-left">
        <Contact />
      </div>
    </div>
  );
}

export default App;
