import * as React from 'react'
import styled from 'styled-components';

//Animation
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation, LineAnimation} from '../Animation';
import Axios from 'axios';


import {connect} from 'react-redux';
import { setLanguage } from "../actions/language";

class Contact extends React.Component  {

   

    

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
       // https://93.188.167.42:8090/api/email <--- replace
       Axios.post('https://localhost:3030/api/email', this.state)
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
    const language = this.props.language;
    return (

        <ContatcStyle exit="exit" variants={pageAnimation} animate="show" initial="hidden" >
            
            <Title>
                <Hide>
                    <motion.h2 
                        variants={titleAnimation}>
                            {language === "no" ? "La oss ta en " : "Let's "} 
                        <span>
                            {language === "no" ? "prat " : "Talk "}
                        </span>
                    </motion.h2>
                    <motion.div variants={LineAnimation} className="line"></motion.div>
                </Hide>
            </Title>


            <Form onSubmit={this.handleSubmit}>
                <Wrapper className="wrapper">
                          
                    <InputWrapper className="input">

                        <Input type="text" 
                               name="name" 
                               onChange={this.handleChange} 
                               value={this.state.name} 
                               placeholder={language === "no" ? "Skriv inn navn" : "Enter name"} 
                               className="name-input" 
                               required 
                        />

                    </InputWrapper>

                    <InputWrapper className="input">

                        <Input type="email" 
                               name="email" 
                               onChange={this.handleChange} 
                               value={this.state.email} 
                               placeholder={language === "no" ? "Skriv inn e-post" : "Enter email"} 
                               className="email-input" 
                               required 
                        />

                    </InputWrapper>

                    <InputWrapper className="input">

                        <Textarea name="message" 
                                  cols="80" 
                                  row="20" 
                                  onChange={this.handleChange} 
                                  value={this.state.message} 
                                  placeholder={language === "no" ? "Din beskjed" : "Your message"} 
                                  className="text-input" 
                                  required
                        />

                    </InputWrapper>
                    
                    <Note>
                        {language === "no" ? "Merk: Kontakt siden er under utvikling. Vennligst, hvis du sender en melding, legg igjen et navn og en e-post som kan nås. Takk for forståelsen" : "Note: Contact page is under develping. Please, if you do send a message leave a name and a reachable email. Thanks for understanding"}
                    </Note>

                    <InputWrapper className="input">

                        <InputBtn type="submit" 
                                  value={language === "no" ? "Send beskjed" : "Send message"} 
                                  disabled={this.state.disabled} 
                                  className="btn" 
                        />

                    </InputWrapper>
                            
                </Wrapper>
                        

                {this.state.emailSent === true && <SuccessMsg>Email Sent</SuccessMsg>}
                {this.state.emailSent === false && <ErrorMsg>Email did not send</ErrorMsg>}
            </Form>   
                    

                    
        </ContatcStyle>
            

        
        
        )
    }
}

const mapStateToProps = (state) => {
	return {
		language: state.layout.language,
	};
};
export default connect(mapStateToProps, { setLanguage })(Contact);


const Note = styled.h6`

    font-size: 1rem;
    margin: 0 1rem;
    padding: 0.5rem;
    text-align: center;
    display: flex; 
    align-items: center;
    justify-content: center;

    @media (max-width: 1300px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        margin: 0 1rem;
        padding: 0 1rem;
    }
`;

const SuccessMsg = styled.p`

    color:#57A773;
    margin: 20px 0;
    display: flex; 
    justify-content: center;

`;

const ErrorMsg = styled.p`

    color:#EE6345;
    margin: 20px 0;
    display: flex; 
    justify-content: center;

`;
    
const ContatcStyle = styled(motion.div)`

    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 3rem;
    }



    @media (max-width: 1300px) {
            
            padding: 2rem 2rem;
            font-size: 0.5rem
        }
`;

const Title = styled.div`

    margin-bottom: 2rem;
    text-align: center;
    color: #212121;
    @media (max-width: 1300px) {
            margin-top: 5rem;
        }
`;

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
       
`;

const Input = styled.input`

    width: 100%;
    outline: none;
    border: 1px solid #212121;
    padding: 5px;
    margin: 5px;
`;

const Textarea = styled.textarea`

    width: 100%;
    height: 200px;
    outline: none;
    border: 1px solid #212121;
    padding: 5px;
    margin: 5px;
`;

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
`;

const Wrapper = styled.div`

    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;


const InputWrapper = styled.div`

    width: 100%;
`;


const Form = styled.form`

    @media (max-width: 1300px) {
        margin-top: 10rem;
    }
`;



