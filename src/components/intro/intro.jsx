import React from 'react';
import "./intro.css";
import pic from '../../assets/sun.jpg';

const Intro = () => {
    return (
        <div className='sections'>
            <div className='section left'>
                <div className='section-wrapper'>
                    <h2 className='s-intro'>Hello, My name is</h2>
                    <h2 className='s-name'>ABC</h2>
                    <div className="s-title">
                        <div className="s-title-wrapper">
                            <div className="s-title-item">Web developer</div>
                            <div className="s-title-item">Designer</div>
                            <div className="s-title-item">Writer</div>
                        </div>
                    </div>
                    <p className="s-desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut labore quod ex ad? Tempore sequi assumenda officiis soluta incidunt hic sapiente corrupti corporis sed
                    </p>
                    <button className='scroll'>Scroll</button>
                </div>
            </div>
            <div className='section right'>
                <div className="img-bg"></div>
                <img src={pic} alt="man" className='s-img' />
            </div>
        </div>
    )
}

export default Intro;
