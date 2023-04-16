import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import "./toggle.css";

const Toggle = () => {
    const {state, dispatch} =useContext(ThemeContext);

    const handleToggle= ()=>{
        dispatch({type: 'TOGGLE'})
    }
    return (
        <div className='toggle'>
            {/* <img src="" alt="" className="t-icon" /> */}
            <div className='t-btn'>
                <div className='dark'></div>
                <div className='light'></div>
                <div className="t-icon" onClick={handleToggle} style={{right:state.darkMode ? '0': '20px'}}></div>
            </div>
        </div>
    )
}

export default Toggle
