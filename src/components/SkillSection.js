import React from 'react'
//icons
import Code from '../img/code.svg';
import Illustrator from '../img/illustrator.svg';
import Server from '../img/vagueness.svg';

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
        <Skill>
            <Content>
                <div className="title_div">
                    <div className="line"></div>
                    <h2 style={{textAlign: "center"}}>
                        {language === "no" ? "Litt om hva jeg gjør " : "A little bit of what i do "}    
                    </h2>
                    <div className="line"></div>
                </div>
                
                <div>
                    <CardsTop>
                        <Card>
                            <div style={{width: "380px"}}>
                                <h2>The code part</h2>
                                <p>I like the idea of having controll over chaos. This is exactly what coding is in my opinion and i love it. I've come to understand html, css and javascript pretty well, and now im continuasly exploring new frameworks/librarys for those languages. </p>
                            </div>
                            <div style={{width: "150px", backgroundColor: "#ececec", borderRadius: "10px", margin: "20px"}}>
                                <img style={{width: "90%", borderRadius: "10px"}} src={Code} alt="" />
                            </div>
                            
                        </Card>
                        <Card>
                            <div style={{width: "400px"}}>
                                <h2>The design part</h2>
                                <p>I've always thought about design to express feelings, and it is. When you just sit down in front of your work station with a freshly made coffee and create ideas from top of your head is magical. </p>
                            </div>
                            <div style={{width: "150px", backgroundColor: "#ececec", borderRadius: "10px" , margin: "20px"}}>
                                <img style={{width: "90%", borderRadius: "10px"}} src={Illustrator} alt="" />
                            </div>
                        </Card>
                    </CardsTop>
                    <CardsBottom>
                        <div style={{width: "500px"}}>
                            <h2>The logical part (back-end)</h2>
                            <p>This is the part i only have a sneak peak into now and then. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia nemo reprehenderit dignissimos quidem molestiae repudiandae obcaecati ab aliquam esse.</p>
                        </div>
                        <div style={{width: "150px", backgroundColor: "#ececec", borderRadius: "10px"}}>
                            <img style={{width: "90%", borderRadius: "10px"}} src={Server} alt="" />
                        </div>
                    </CardsBottom>
                </div>
            </Content>

                
              
    
            
            
        </Skill>
    )
};

const Skill = styled(About)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 10rem;
    border-bottom: #dddddd solid 1px;
    box-shadow: inset 0px 1px 4px 0px rgb(0 0 0 / 10%);
    background: #fafafa;


    @media (max-width: 1300px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
        
    }
`;

const Content = styled.div`
display: flex;
flex-direction: column;
margin: 10rem 0;

    .title_div {
        display: flex;
        align-items: center;
        justify-content: center;

        .line {
            width: 100px;
            background: #757575;
            height: 0.1px;
        }

        h2 {
            color: #616161;
            font-weight: 400;
            margin: 0 20px;
            
        }
    }

`;

const CardsTop = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CardsBottom = styled.div`
width: 100%;
border: 1px solid #757575;
max-width: 1400px;
margin: 0 auto;
border-radius: 10px;
padding: 36px;
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    border: 1px solid #757575;
    background: #fdfdfd;
    padding: 36px;
    border-radius: 10px;
    
    h2 {
        color: #616161;
    }
   

   
`;



export default SkillSection;