import * as React from "react";
import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import Slider from "./sections/Slider";
import About from "./sections/About";
import Comment from "./sections/Comment";
import How from "./sections/How";
import Jupiter from "./sections/Jupiter";
import Mayan from "./sections/Mayan";
import Features from "./sections/Features";
import Tokenomics from "./sections/Tokenomics";
import Social from "./sections/Social";
import Why from "./sections/Why";
import FAQ from "./sections/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="lg:px-[60px]">
        <Navbar />
        <Intro />
        <Slider />
        <About />
        <Comment />
        <How />
        <Jupiter />
        <Mayan />
        <Features />
        <Tokenomics />
        <Social />
        <Why />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;
