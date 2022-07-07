import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");

  const [startingColor, finalColor] = useState("white");

  function mouseOut() {
    finalColor("white");
  }

  function mouseOver() {
    finalColor("black");
  }

  function handleClick() {
    setHeadingText("Submitted")
    console.log("Clicked"); 
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: startingColor}} onClick={handleClick} onMouseOver={mouseOver} onMouseOut={mouseOut}>Submit</button>
    </div>
  );
}

export default App;
