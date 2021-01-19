import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
import emailjs from 'emailjs-com'




const ContactDetails = () => {



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



    return(
        
        
        <div>
            <form onSubmit={sendEmail}>
                    <Wrapper className="wrapper">
                        <h2>Let's Talk</h2>
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
        </div>
       
    )
}

export default ContactDetails;

const Input = styled.input`
width: 100%;
outline: none;
border: 1px solid #23d997;
padding: 5px;
margin: 5px;
`

const Textarea = styled.textarea`
width: 100%;
height: 200px;
outline: none;
border: 1px solid #23d997;
padding: 5px;
margin: 5px;
`

const InputBtn = styled.input`
width: 100%;
outline: none;
border: 1px solid #23d997;
padding: 5px;
margin: 5px;
background: none;
cursor: pointer;
`

const Wrapper = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
    font-weight: bold;
    letter-spacing: 10px;
}
`


const InputWrapper = styled.div`
width: 400px;
`