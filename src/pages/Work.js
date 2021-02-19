import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import  WorkState, {WEBDEVELOPER, CONSULTANT, FRONTEND, BACKEND}  from "../workState";


//Animation
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnimation, LineAnimation} from '../Animation';
import ScrollTop from '../components/ScrollTop';

const ALL = "ALL";



const Work = () => {

    const [selectedWork, setSelectedWork] = useState(ALL);

    const handleSelectedWork = (newWork) => {
        setSelectedWork(newWork)
    }



    return (
        <Container exit="exit" variants={pageAnimation} animate="show" initial="hidden">
            
            <div className="filter">
                <Btn 
                    variants={fade}
                    type="button" 
                    onClick={() => {
                        handleSelectedWork(ALL)
                    }}
                >
                    All
                </Btn>
                <Btn 
                    variants={fade}
                    type="button" 
                    onClick={() => {
                        handleSelectedWork(WEBDEVELOPER)
                    }}
                >
                    Web developer
                </Btn>
                <Btn 
                    variants={fade}
                    type="button" 
                    onClick={() => {
                        handleSelectedWork(CONSULTANT)
                    }}
                >
                    Consultant
                </Btn>
                <Btn 
                    variants={fade}
                    type="button" 
                    onClick={() => {
                        handleSelectedWork(BACKEND)
                    }}
                >
                    Back-end
                </Btn>
                <Btn 
                    variants={fade}
                    type="button" 
                    onClick={() => {
                        handleSelectedWork(FRONTEND)
                    }}
                >
                    Front-End
                </Btn>
                    
            </div>
            {WorkState.map(work => {
                if(selectedWork !== ALL) {
                    const idx = work.categories.findIndex((category) => (category === selectedWork));
                    if (idx === -1) {
                        return null;
                    }
                }

                return (

                    <Project key={work.id}>
                        <motion.h2 variants={fade}>{work.title}</motion.h2>
                        <motion.div variants={LineAnimation} className="line"></motion.div>
                        <Link to={work.url}>       
                            <Hide>
                                <motion.img variants={photoAnimation} src={work.image} alt="project one"/>
                            </Hide>    
                        </Link>
                    </Project>
                )
            })}
            
               
            
            
          
            
          
          
            <ScrollTop />
        </Container>
    )
};

        
 const Btn = styled(motion.button)`
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    
    text-transform: none;
    
 `


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