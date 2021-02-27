import React from 'react'
//icons
import clock from '../img/clock.svg'
import teamwork from '../img/teamwork.svg';
import money from '../img/money.svg';
import diaphragm from '../img/diaphragm.svg';

import home2 from '../img/code6.jpg'
import {About, Description, Image} from '../styles'
import styled from 'styled-components';
import {useScroll} from './useScroll';
import {scrollReveal} from '../Animation';

import {useSelector} from 'react-redux';



const SkillSection = () => {

    const language = useSelector(state => state.layout.language);

    const [element, controls] = useScroll();

    return (
        <Skill variants={scrollReveal} animate={controls} ref={element}>
            <Description>

                <h2>
                        {language === "no" ? "Høy " : "High "} 
                    <span>
                        {language === "no" ? "Kvalitet " : "Quality "} 
                    </span> 
                        {language === "no" ? "Nett produkter " : "Web products "}
                </h2>

                <Cards>

                    <Card>
                        <div className="icon">
                            <img alt="icon of react" src={clock} />
                            <h3>
                                {language === "no" ? "Effektivitet " : "Efficiency "}
                            </h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img alt="icon of javascript" src={teamwork} />
                            <h3>
                                {language === "no" ? "Samarbeid " : "Teamwork "}
                            </h3>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card>

                    <Card> 
                        <div className="icon">
                            <img alt="icon of adobe xd" src={money} />
                            <h3>
                                {language === "no" ? "Rimelig " : "Affordable "}
                            </h3>
                            
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        
                    </Card>

                    <Card>
                        <div className="icon">
                            <img alt="icon of java" src={diaphragm} />
                            <h3>
                                {language === "no" ? "Tillit " : "Trust "}
                            </h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Card>

                </Cards>
                
            </Description>
            <Image>
                <img alt="pic of something" src={home2}  />
            </Image>
        </Skill>
    )
};

const Skill = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    @media (max-width: 1300px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
        
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
       justify-content: center;
      
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;

    h3 {
        margin-left: 1rem;
        background: none;
        border: 1px solid white;
        color: #212121;
        width: 100px;
        text-align: center;

    }
    @media (max-width: 1300px) {
       justify-content: center;
      
    }

    
}
    p {
        font-size: 1rem;
    }


    
`

export default SkillSection;