import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';//npm i @emailjs/browser
import "./contact.css";
import { ThemeContext } from '../../context/ThemeContext';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone]= useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4hmkfw2', 'template_cm0phk9', formRef.current, 'wowl9eeeR9OlWeglV')//form to formRef
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    const {state} = useContext(ThemeContext );

    return (
        <div className='contact'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lorem ipsum dolor sit amet.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            {/* <i class="fa-regular fa-phone-volume"></i> */}
                            <img src="https://source.unsplash.com/random/30×30/?phone" alt="" className='c-phone' />
                            +456789899
                        </div>
                        <div className="c-info-item">
                            {/* <i class="fa-regular fa-phone-volume"></i> */}
                            <img src="https://source.unsplash.com/random/30×30/?email" alt="" className='c-phone' />
                            @google.com
                        </div>
                        <div className="c-info-item">
                            {/* <i class="fa-regular fa-phone-volume"></i> */}
                            <img src="https://source.unsplash.com/random/30×30/?address" alt="" className='c-phone' />
                            United Kingdom
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Lorem ipsum dolor sit.</b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nulla accusantium blanditiis inventore, quo dolore?
                    </p>
                    <form ref={formRef} action="" onSubmit={handleSubmit}>
                        {/* the value of name attribute will be used in emailjs like user_name
                         */}
                         <div className='message'> {done && "Thank you..."}</div>
                        <input type="text" placeholder='Name' name="user_name"  style={{backgroundColor: state.darkMode ? '#222' : 'white', color: state.darkMode&& 'white'}} />
                        <input type="text" placeholder='Subject' name="user_subject"  style={{backgroundColor: state.darkMode ? '#222' : 'white', color: state.darkMode&& 'white'}} />
                        <input type="text" placeholder='Email' name="user_email"  style={{backgroundColor: state.darkMode ? '#222' : 'white', color: state.darkMode&& 'white'}} />
                        <textarea rows="5" placeholder='Message' name="message" style={{backgroundColor: state.darkMode ? '#222' : 'white', color: state.darkMode&& 'white'}} ></textarea>
                        <button type='submit' className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
