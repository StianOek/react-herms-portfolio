import React from 'react'
import styled from 'styled-components';

//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';

const Contact = () => {
    return(
        <ContatcStyle exit="exit" variants={pageAnimation} animate="show" initial="hidden" >
            <Container>
                <h2>Contact me</h2>
                <Form >
                    <InputStyle type="text" placeholder="Enter name" />
                    <InputStyle type="text" placeholder="Enter Email" />
                    <TextAreaStyle type="text" placeholder="Enter your message here." rows="15" cols="50"></TextAreaStyle>
                    <button>Submit</button>
                </Form >
                
            </Container>
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
color: #000;
`

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Form = styled.form`
min-width: 70%;
display: flex;
flex-direction: column;
`

const InputStyle = styled.input`
outline: none;
padding: 1rem 4rem;
margin: 0.6rem;
width: 100%;
border: 1px solid #23d997;
`

const TextAreaStyle = styled.textarea`
border: 1px solid #23d997;
padding: 1rem 4rem;
width: 100%;
margin: 0.6rem;
`

export default Contact;