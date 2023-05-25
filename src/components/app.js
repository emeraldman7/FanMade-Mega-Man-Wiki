import React from "react";
import NavBar from "./Navbar";
import {MegaHi, Question, DescPopUp} from "./home";


function App () {
    return (
        <>
        <div>
            <NavBar />
        </div>

        <div>
            <MegaHi />
        </div>

        <div>
            <Question />
        </div>

        <div>
            <DescPopUp />
        </div>
        </>
    )
}

export default App;