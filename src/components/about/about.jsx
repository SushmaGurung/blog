import React from 'react';
import "./about.css";
import pic1 from "../../assets/back.jpg";
import pic2 from "../../assets/image.png";

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            {/* <div className="about-card bg"></div> */}
            <div className="about-card">
                <img src={pic1} alt="" className='a-img' />
            </div>
        </div>
        <div className="about-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi officia quia adipisci at molestias iure?
            </p>
            <p className='a-desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, harum beatae eius nulla cupiditate incidunt voluptatum voluptas pariatur itaque at sequi laboriosam. Voluptates ipsam, in excepturi illum sapiente odit autem veniam minus omnis cum vitae quos voluptatum ipsum odio aspernatur. Similique nihil voluptas, id voluptatum porro dolorum aliquid libero provident!
            </p>
            <div className="a-award">
                <img src={pic2} alt="" className='a-award-img'/>
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Designs Awards 2024</h4>
                    <p className="a-award-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, esse.
                    </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
