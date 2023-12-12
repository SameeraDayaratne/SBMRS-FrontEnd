/* eslint-disable no-unused-vars */

import "./App.css";
import Hero from "./components/Hero";
import HeroNew from "./components/HeroNew";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="font-poppins">
        <Navbar />
        <Hero />
        <Main />
      </div>
    </SkeletonTheme>
  );
}

export default App;
