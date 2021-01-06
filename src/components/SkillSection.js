import React from 'react'
//icons
import clock from '../img/clock.svg'
import teamwork from '../img/teamwork.svg';
import money from '../img/money.svg';
import diaphragm from '../img/diaphragm.svg';
//landing pictures
import home2 from '../img/code6.jpg'

import {About, Description, Image, Hide} from '../styles'
import styled from 'styled-components';
import {useScroll} from './useScroll';
import {scrollReveal} from '../Animation';

const SkillSection = () => {

const [element, controls] = useScroll();

    return (
        <Skill variants={scrollReveal} animate={controls} ref={element}>
            <Description>
                <h2>High <span>Quality</span> web products</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon of react" src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>I spend all my effort and time on one project at a time</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon of javascript" src={teamwork} />
                            <h3>Teamwork</h3>
                            
                        </div>
                        <p>I work best with continuasly contact with my client</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon of adobe xd" src={money} />
                            <h3>Affordable</h3>
                        </div>
                        <p></p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon of java" src={diaphragm} />
                            <h3>Trust</h3>
                        </div>
                        <p></p>
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

    h3{
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