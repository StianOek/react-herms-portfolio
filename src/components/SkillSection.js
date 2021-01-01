import React from 'react'
import react from '../img/react-seeklogo.com.svg'
import javascript from '../img/javascript.svg';
import XD from '../img/adobe-xd.svg';
import java from '../img/java.svg';
import home2 from '../img/home2.png'

const SkillSection = () => {
    return (
        <div className="Skills">
            <div className="description">
                <h2>Heres an overview of my <span>tool</span> belt</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img alt="icon of react" src={react} />
                            <h3>React</h3>
                        </div>
                        <p>React is the shit</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon of javascript" src={javascript} />
                            <h3>Javascript</h3>
                            <p>Javascript is the shit</p>
                        </div>
                        <p>React is the shit</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon of adobe xd" src={XD} />
                            <h3>Adobe XD</h3>
                        </div>
                        <p>Adobe Xd is the shit</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt="icon of java" src={java} />
                            <h3>Java</h3>
                        </div>
                        <p>Java is the shit</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img alt="pic of something" src={home2}  />
            </div>
        </div>
    )
}

export default SkillSection;