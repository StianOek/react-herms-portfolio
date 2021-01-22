import React, { Component } from 'react'
import styled from 'styled-components';

//Animation
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation, LineAnimation} from '../Animation';
import Axios from 'axios';


class Contact extends Component  {

    

   state = {
         name: '',
         email: '',
         message: '',
         disabled: false,
         emailSent: null
   }


   handleChange = (event) => {
    event.preventDefault();

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
   }

   handleSubmit = (event) => {
       event.preventDefault();

       this.setState({
           disabled: true
           
       })

       Axios.post('http://localhost:3030/api/email', this.state)
        .then(res => {
            if(res.data.success) {
                console.log(res)
                this.setState({
                    disabled: false,
                    emailSent: true
                
                });
            } else {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            }
            
        })
        .catch(err => {
            this.setState({
                disabled: false,
                emailSent: false
            })
        })

   }
    
render() {
    return (
            <ContatcStyle exit="exit" variants={pageAnimation} animate="show" initial="hidden" >
            
                <Title>
                        <Hide>
                            <motion.h2 variants={titleAnimation}>Let's <span>Talk</span></motion.h2>
                            <motion.div variants={LineAnimation} className="line"></motion.div>
                        </Hide>
                    </Title>

                   

               
                    <form onSubmit={this.handleSubmit}>
                        <Wrapper className="wrapper">
                          
                            <InputWrapper className="input">
                                <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter name" className="name-input" required />
                            </InputWrapper>
                            <InputWrapper className="input">
                                <Input type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter Email" className="email-input" required />
                            </InputWrapper>
                            <InputWrapper className="input">
                                <Textarea name="message" cols="80" row="20" onChange={this.handleChange} value={this.state.message} placeholder="Your message" className="text-input" required/>
                            </InputWrapper>
                            <InputWrapper className="input">
                                <InputBtn type="submit" value="Send message" disabled={this.state.disabled} className="btn" />
                            </InputWrapper>
                        </Wrapper>

                        {this.state.emailSent === true && <SuccessMsg>Email Sent</SuccessMsg>}
                        {this.state.emailSent === false && <ErrorMsg>Email not Sent</ErrorMsg>}
                    </form>   

                     
            </ContatcStyle>

        
        
        )
    }
}

const SuccessMsg = styled.p`
color:#57A773;
margin: 20px 0;
display: flex; 
justify-content: center;

`

const ErrorMsg = styled.p`
color:#EE6345;
margin: 20px 0;
display: flex; 
justify-content: center;

`
    

const ContatcStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

h2{
    font-size: 4rem;
}



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