import React from 'react'
import myself from '../img/IMG_4643.JPG';

import {About, Description, Image, Hide} from '../styles'

//Framer motion
import {motion} from 'framer-motion';
import {titleAnimation, fade, photoAnimation} from '../Animation';



const AboutSection = () => {

      

    return(
        <About>
            <Description>
                <motion.div  className="title">
                    <Hide>
                        <motion.h2 className="title_one" variants={titleAnimation}>Name is <span>Stian Herms</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}><span>Front-End</span> developer</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 className="title_three" variants={titleAnimation}>With <span>UI/UX</span> in mind</motion.h2>
                    </Hide>
                    <motion.p variants={fade}>Contact me for any web related or design ideas that you may have. I am driven to fetch your ideas from workdesk to desktop/mobile.</motion.p>
                    <motion.button variants={fade}>Contact me</motion.button>
                </motion.div>
            </Description>

            <Image  
                    whileHover={{ scale: 0.7, rotate: 45 }}
                    whileTap={{
                    scale: 0.4,
                    rotate: -45,
                    filter: "blur(5px)",
                    border: "5px solid #23d997"
                    
                                        }}>
                <motion.img variants={photoAnimation} src={myself} alt="Image of myself taking picture" />
            </Image>
        
        </About>
    )
};

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