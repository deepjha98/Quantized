import React from "react";
import "./main.scss";
//--------COMPONENTS IMPORT--------
import Header from "./components/header";
import { Uses } from "./components/uses";
import Features from "./components/features";
import { Story } from "./components/story";
import Computer from "./components/computer";
import { Gallery } from "./components/gallery";
import { Footer } from "./components/footer";
////////////////////////////////////////////
function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>
      <Header />
      <Uses />
      <Features />
      <Story />
      <Computer />
      <Gallery />
      <Footer />
    </div>
  );
}
//////////////////////////////////////////////
export default App;
