import React from 'react'
import myself from '../img/home1.png';

const About = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Name is Stian Herms</h2>
                    </div>
                    <div className="hide">
                        <h2>Front-End developer</h2>
                    </div>
                    <div className="hide">
                        <h2>With <span>UI/UX</span> in mind</h2>
                    </div>
                    <p>Contact me for any web related or design ideas that you have! I am driven to fetch your ideas out to the world, weather its dekstop or mobile.</p>
                    <button>Contact me</button>
                </div>
            </div>

            <div className="image">
                <img src={myself} alt="a pic of myself in about section" />
            </div>
        
        </div>
    )
}

export default About;