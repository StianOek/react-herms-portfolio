import React from 'react'
import myself from '../img/memyself.png';
import {About, Description, Image, Hide} from '../styles'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


//Framer motion
import {motion} from 'framer-motion';
import {titleAnimation, fade, photoAnimation} from '../Animation';

import {useSelector} from 'react-redux';
import Button from './Button';






const AboutSection = () => {

    const language = useSelector(state => state.layout.language);

    return(
        
        <About>
            <Description>
                <motion.div  className="title">
                    <Hide>
                        { language === "no" 
                        
                        ? 
                        <motion.h1
                            className="title_one" 
                            variants={titleAnimation}>
                                UI/UX Designer &amp; <br />
                                Front-end Developer
                        </motion.h1>
                        : 
                        <motion.h1
                            className="title_one" 
                            variants={titleAnimation}>
                                UI/UX Designer &amp; <br />
                                Front-end Utvikler
                        </motion.h1>
                        }
                       
                    </Hide>
                    <motion.p 
                       
                        variants={fade}>
                        {language === "no" ? "Mitt navn er Stian Ihler - Jeg er en web utvikler og cyber sikkerhet entusiast som spesialiserer seg innen front-end og mobil utvikling i Oslo ved Høyskolen Kristiania. Jeg er en pappa, samboer og en fiskegal. Ser frem til å høre fra deg: Trykk på 'Kontakt meg' å legg igjen en beskjed!  " : "I'm Stian Ihler, a web developer and cyber security enthusiast who specializes in front-end and mobile development here in Oslo at Kristiania University College. I'm a dad, cohabitant and a fishmonger. Looking forward to hearing from you: Tap Contact me to leave a message"}
                    </motion.p>

                   
                        <Link to="/contact">
                        <Button variants={fade}>
                            {language === "no" ? "Kontakt meg" : "Contact me"}
                        </Button>
                        </Link>
                </motion.div>
            </Description>

            <Image  
                   whileTap={{
                   scale: 0.5,
                   rotate: 360,
                   }}>
                
                <motion.img 
                    variants={photoAnimation} 
                    src={myself} 
                    alt="" 
                />
            </Image>

        
            
        
        </About>
    )
};


// Styles imported from styles.js component!

//Styling
// const About = styled.div`
//     min-height: 90vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 5rem 10rem;
//     color: white;

// `;

// const Description  = styled.div`
//     flex: 1;
//     padding-right: 10rem;

//     h2 {
//         font-weight: lighter;
//     }


// `

// const Image = styled.div`
//     flex: 1;
//     overflow: hidden;

//     img {
//         width: 100%;
//         height: 80vh;
//         object-fit: cover;
//     }

// `

// const Hide = styled.div`
// overflow: hidden;
// `

export default AboutSection;