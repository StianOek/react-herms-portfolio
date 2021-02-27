import React from 'react'
import myself from '../img/memyself.png';
import {About, Description, Image, Hide} from '../styles'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


//Framer motion
import {motion} from 'framer-motion';
import {titleAnimation, fade, photoAnimation} from '../Animation';

import {useSelector} from 'react-redux';






const AboutSection = () => {

    const language = useSelector(state => state.layout.language);

    return(
        
        <About>
            <Description>
                <motion.div  className="title">
                    <Hide>
                        <motion.h2
                            className="title_one" 
                            variants={titleAnimation}>
                            {language === "no" ? "navnet er " : "name is "}
                            <span>
                                Stian Herms
                            </span>
                         </motion.h2>

                    </Hide>

                    <Hide>
                        <motion.h2 
                            variants={titleAnimation}>
                            <span>Front-End</span> 
                            {language === "no" ? " utvikler" : " developer"}
                         </motion.h2>
                    </Hide>

                    <Hide>

                        <motion.h2 
                            className="title_three" 
                            variants={titleAnimation}>
                            {language === "no" ? "med " : "with "}
                            <span>
                                 UI/UX
                            </span>
                            {language === "no" ? " i tankene" : " in mind"}
                        </motion.h2>

                    </Hide>

                    <motion.p 
                        variants={fade}>
                        {language === "no" ? "Kontakt meg for eventuelle nettrelaterte eller designideer du måtte ha. Med mitt samarbeid kan vi gjøre ideene dine til gode nettløsninger" : "Contact me for any web related or design ideas that you may have. I am driven to fetch your ideas from workdesk to desktop/mobile."}
                    </motion.p>

                    <ContactLink 
                        variants={fade} 
                        to="/contact"> 
                        {language === "no" ? "Kontakt meg" : "Contact me"}
                    </ContactLink>

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
                    alt="Image of myself taking picture" 
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

const ContactLink = styled(Link)`
font-weight: lighter;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0.7rem 2rem;
    border: 1px solid #23d997;
    border-radius: 50px;
    background: transparent;
    outline: none;
    color: #212121;
    text-transform: uppercase;
    transition: all 0.5s ease;
    text-decoration: none;
    &:hover {
        background-color: #23d997; 
        color: white;
    }

    @media (max-width: 1300px) {
        margin-bottom: 5rem;
        
    }
   
`;


export default AboutSection;