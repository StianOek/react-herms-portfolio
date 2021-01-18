import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import emailjs from 'emailjs-com'

//Animation
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation, LineAnimation} from '../Animation';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_kpiuh5j', 'template_83fyzmq', e.target, 'user_Nr8Sxj77Ob4omNzw4xBvL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
     
      let message = "You succesfully sent a message";

    return(
        <ContatcStyle exit="exit" variants={pageAnimation} animate="show" initial="hidden" >
            
                <Title>
                        <Hide>
                            <motion.h2 variants={titleAnimation}>Let's <span>Talk</span></motion.h2>
                            <motion.div variants={LineAnimation} className="line"></motion.div>
                        </Hide>
                    </Title>

                   

               
                    <form onSubmit={sendEmail}>
                        <Wrapper className="wrapper">
                          
                            <InputWrapper className="input">
                                <Input type="text" name="name" placeholder="Enter name" className="name-input" />
                            </InputWrapper>
                            <InputWrapper className="input">
                                <Input type="email" name="email" placeholder="Enter Email" className="email-input" />
                            </InputWrapper>
                            <InputWrapper className="input">
                                <Textarea name="message" cols="80" row="20" placeholder="Your message" className="text-input"/>
                            </InputWrapper>
                            <InputWrapper className="input">
                                <InputBtn type="submit" value="Send message" className="btn" />
                            </InputWrapper>
                        </Wrapper>
                    </form>   

                    <p>{message}</p>    
        </ContatcStyle>

        
        
    )
}

const ContatcStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;


@media (max-width: 1300px) {
        
        padding: 2rem 2rem;
        font-size: 1rem
    }
`
const Title = styled.div`
margin-bottom: 1rem;
text-align: center;
color: #212121;
@media (max-width: 1300px) {
        margin-top: 5rem;
    }
`

const Hide = styled.div`
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    .line {
            height: 0.1rem;
            background: #212121;
            margin-bottom: 2rem;
            width: 100%;
        }
       
`

const Input = styled.input`
width: 100%;
outline: none;
border: 1px solid #212121;
padding: 5px;
margin: 5px;
`

const Textarea = styled.textarea`
width: 100%;
height: 200px;
outline: none;
border: 1px solid #212121;
padding: 5px;
margin: 5px;
`

const InputBtn = styled.input`
width: 100%;
outline: none;
border: 1px solid #23d997;
padding: 5px;
margin: 5px;
background: #23d997;
color: #fff;
cursor: pointer;
text-transform: uppercase;
`

const Wrapper = styled.div`
width: 100%;
height: 30vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`


const InputWrapper = styled.div`
width: 100%;
`






export default Contact;