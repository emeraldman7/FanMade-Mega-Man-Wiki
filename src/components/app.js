import React from "react";
import NavBar from "./Navbar";
import { MegaHi, Question, DescPopUp } from "./home";
import { useState } from "react"

function App() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div>
        <MegaHi />
      </div>

      <div>
        <Question
          onClick={() => setIsPopUpOpen((previousValue) => !previousValue)}
        />
        {isPopUpOpen ? <DescPopUp /> : null}
      </div>
    </>
  );
}

export default App;
