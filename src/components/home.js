import React, { useState } from "react";
import Home01 from "./home-component-01";
import Home02 from "./home-component-02";
import Home03 from "./home-component-03";
import "../components/home.css"

function Home() {
  const [btn1Toggle, setBtn1Toggle] = useState(false);
  const [btn2Toggle, setBtn2Toggle] = useState(false);
  const [btn3Toggle, setBtn3Toggle] = useState(false);

  return (
    <div>
      <h1>Home</h1>

      <div className="home-display">
        <button onClick={() => setBtn1Toggle(!btn1Toggle)}>General List</button>
        {btn1Toggle && <Home01 />}
        <div class="wave"></div>

        <button onClick={() => setBtn2Toggle(!btn2Toggle)}>Mandatory List</button>
        {btn2Toggle && <Home02 />}
        <div class="wave"></div>

        <button onClick={() => setBtn3Toggle(!btn3Toggle)}>Shopping List</button>
        {btn3Toggle && <Home03 />}
        <div class="wave"></div>
      </div>
    </div>
  );
}

export default Home;
