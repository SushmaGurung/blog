import React, { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import Productlist from "./components/productlist/Productlist";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context/ThemeContext";
// import ThemeContextProvider from "./context/ThemeContext";

function App(){
    const {state} =useContext(ThemeContext);
    return(
        <div style={{backgroundColor: state.darkMode ? '#222' : 'white', color: state.darkMode && 'white'}}>
            {/* <ThemeContextProvider> */}
            <Toggle/>
            <Intro/>
            <About/>
            <Productlist/>
            <Contact/>
            {/* </ThemeContextProvider> */}

        </div>
    )
}

export default App;