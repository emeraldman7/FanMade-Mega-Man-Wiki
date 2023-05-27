import React from "react";
import { useState } from "react";

function MegaHi() {
  return (
    <>
      <div>
        <h1 className="BigGreeting">
          <strong>HELLO!</strong>
        </h1>

        <p className="Welcoming">Welcome to the unofficial Mega Man Wiki!</p>
      </div>
    </>
  );
}

function Question({ onClick }) {
  const [setPopUp, popUp] = useState(false);
  return (
    <>
      <div>
        <h2 className="ActivateText" onClick={onClick}>
          What Is This Website?
        </h2>
      </div>
    </>
  );
}

function DescPopUp() {
  console.log("Clicked!");

  return (
    <>
      <p className="Describe">
        This is a fan made wiki about givng you knowledge of the Mega Man games:
        NES, Gameboy, GameGear, Consoles etc. all of them! I will try as best as
        I can to provide you accurate info on what Mega Man game you want to
        know about.
      </p>

      <div className="Describe">
        This website is not affiliated with Capcom. Please support their
        official releases
      </div>
    </>
  );
}

export { MegaHi, Question, DescPopUp };
