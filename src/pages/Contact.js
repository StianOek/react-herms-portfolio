import * as React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import Button from "../components/Button";

//Redux
import { connect } from "react-redux";
import { setLanguage } from "../actions/language";

//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, LineAnimation } from "../Animation";
import Footer from "../components/Footer/Footer";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSent: false,
      total: "",
    };
  }

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({
      emailSent: true,
      total: "Email sent",
    });
    emailjs
      .sendForm(
        "service_6bnrukh",
        "template_iccyyxk",
        e.target,
        "user_Nr8Sxj77Ob4omNzw4xBvL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  render() {
    const { emailSent, total } = this.state;

    const language = this.props.language;
    return (
      <>
        <ContatcStyle
          exit="exit"
          variants={pageAnimation}
          animate="show"
          initial="hidden"
        >
          <Title>
            <Hide>
              <motion.h2 variants={titleAnimation}>
                {language === "no" ? "La oss ta en " : "Let's "}
                <span>{language === "no" ? "prat " : "Talk "}</span>
              </motion.h2>
              <motion.div
                variants={LineAnimation}
                className="line"
              ></motion.div>
            </Hide>
          </Title>

          <Form onSubmit={this.sendEmail}>
            <Wrapper className="wrapper">
              <InputWrapper className="input">
                <Input
                  type="text"
                  name="name"
                  placeholder={
                    language === "no" ? "Skriv inn navn" : "Enter name"
                  }
                  className="name-input"
                  required
                />
              </InputWrapper>
              <InputWrapper className="input">
                <Input
                  type="email"
                  name="email"
                  placeholder={
                    language === "no" ? "Skriv inn e-post" : "Enter email"
                  }
                  className="email-input"
                  required
                />
              </InputWrapper>
              <InputWrapper className="input">
                <Textarea
                  name="message"
                  cols="80"
                  row="20"
                  placeholder={
                    language === "no" ? "Din beskjed" : "Your message"
                  }
                  className="text-input"
                  required
                />
              </InputWrapper>

              <InputWrapper className="input">
                <Button onClick={this.submitPass} type="submit" className="btn">
                  {language === "no" ? "Send beskjed" : "Send message"}
                </Button>
              </InputWrapper>
              <Note>{total}</Note>
            </Wrapper>
          </Form>
        </ContatcStyle>
        <Footer />
      </>
    );
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

const ContatcStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 3rem;
    padding: 30px 0;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    font-size: 0.5rem;
  }
`;

const Title = styled.div`
  padding: 50px 0;
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
  border: #949494 solid 1px;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const Textarea = styled.textarea`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  outline: none;
  border: #949494 solid 1px;
  padding: 15px;
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
