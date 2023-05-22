import { createRoot } from "react-dom/client";
import React from "react";
import NavBar from './components/Navbar';
import MegaHi from './components/home';
import App from './components/app';


const root = createRoot(document.querySelector('#app'))

root.render(<NavBar />)
root.render(<MegaHi />)

function render () {
    <App />
}


