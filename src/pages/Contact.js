import React from 'react'
import styled from 'styled-components';

//Animation
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation, LineAnimation} from '../Animation';

const Contact = () => {
    return(
        <ContatcStyle exit="exit" variants={pageAnimation} animate="show" initial="hidden" >
           
                <Title>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Lets Talk</motion.h2>
                        <motion.div variants={LineAnimation} className="line"></motion.div>
                    </Hide>
                </Title>

                <div>
                    <Hide>
                        <Social variants={titleAnimation}>
                            <Circle />
                            <h2>Send me a message</h2>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants={titleAnimation}>
                            <Circle />
                            <h2>Find me on Twitter</h2>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants={titleAnimation}>
                            <Circle />
                            <h2>Or just Call me</h2>
                        </Social>
                    </Hide>
                    
                </div>

        </ContatcStyle>
        
    )
}

const ContatcStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
width: 100%;
`
const Title = styled.div`
margin-bottom: 4rem;
color: #212121;
`

const Hide = styled.div`
overflow: hidden;
    .line {
            height: 0.1rem;
            background: #212121;
            margin-bottom: 3rem;
        }
`
const Circle = styled.div`
border-radius: 50% 90% / 100% 30%  ;
width: 2rem;
height: 2rem; 
background: #23d997;
position: relative;

&:after {
    content: "";
    width: 1rem;
    height: 1rem;
    position: absolute;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}

`
const Social = styled(motion.div)`
display: flex;
align-items: center;
    h2{
        margin: 2rem;
        font-size: 1.4rem;
        letter-spacing: 2px;
        cursor: pointer;
        
    }
`



export default Contact;