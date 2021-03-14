import React from "react";
import "./main.scss";
//--------COMPONENTS IMPORT--------
import Header from "./components/header";
import { Uses } from "./components/uses";
import Features from "./components/features";
import { Story } from "./components/story";
import Computer from "./components/computer";
////////////////////////////////////////////
function App() {
  return (
    <div className="container">
      <Header />
      <Uses />
      <Features />
      <Story />
      <Computer />
    </div>
  );
}
//////////////////////////////////////////////
export default App;
