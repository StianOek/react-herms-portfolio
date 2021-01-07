import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components';

import {Link} from 'react-router-dom';

import work from '../img/code.jpg';
import work2 from '../img/Storebrand.jpg';

//Animation
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation, fade, photoAnimation, LineAnimation, slider, leftslide} from '../Animation';
import ScrollTop from '../components/ScrollTop';


const Work = () => {
    return(
        
        <Container exit="exit" variants={pageAnimation} animate="show" initial="hidden">
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
            <Project>
                <motion.h2 variants={fade}>The Zeipt Project</motion.h2>
                <motion.div variants={LineAnimation} className="line"></motion.div>
                <Link to="/work/zeipt">
                    
                    <Hide>
                        <motion.img variants={photoAnimation} src={work} alt="project one"/>
                    </Hide>
                    
                </Link>
            </Project>
            <Project>
                <h2>Storebrand</h2>
                <div className="line"></div>
                <Link to="/work/storebrand">
                    <img src={work2} alt="project two"/>
                </Link>
            </Project>
          
            <ScrollTop />
        </Container>
    )
};


const Container = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;
    }
    
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
`;

const Project = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.2rem;
        background: #212121;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top: 10%;
width: 100%;
height: 100vh;
background: #000;
z-index: 2;
`
const Frame2 = styled(Frame1)`
background: #eee;
`
const Frame3 = styled(Frame1)`
background: #23d997;
`

export default Work;