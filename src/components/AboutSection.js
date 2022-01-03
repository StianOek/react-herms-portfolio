import React from "react";
import myself from "../img/memyself.png";
import { About, Description, Image, Hide } from "../styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Framer motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../Animation";

import { useSelector } from "react-redux";
import Button from "./Button";

const AboutSection = () => {
  const language = useSelector((state) => state.layout.language);

  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            {language === "no" ? (
              <motion.h1 className="title_one" variants={titleAnimation}>
                Litt designer &amp; <br />
                Front-end Utvikler
              </motion.h1>
            ) : (
              <motion.h1 className="title_one" variants={titleAnimation}>
                Part Designer &amp; <br />
                Front-end Developer
              </motion.h1>
            )}
          </Hide>
          {language === "no" ? (
            <motion.p variants={fade}>
              Mitt navn er Stian Ihler og jeg har en lidenskap for front-end
              utvikling. Jeg elsker å eksperimentere med ny teknologi for å
              bygge nye fantastiske produkter. En del av spillet er å løse
              problemer for forskjellige bransjer som bruker teknologiens kraft.{" "}
              <br /> Jeg vil gjerne høre fra deg, uansett om det handler om
              prosjekter, jobbmuligheter eller bare for å ta en prat. Ta gjerne
              kontakt med meg når som helst!
            </motion.p>
          ) : (
            <motion.p variants={fade}>
              My name is Stian Ihler and i’m a passionate Front-End Developer. I
              love to experiment with new technologies and to build awesome
              products. A part of the game is to solve problems for different
              industries using the force of tech. <br /> I would love to hear
              from you, wheater it’s about projects, job opportunities, or just
              a chat. Feel free to contact me anytime!
            </motion.p>
          )}

          <Link to="/contact">
            <Button variants={fade}>
              {language === "no" ? "Kontakt meg" : "Contact me"}
            </Button>
          </Link>
          <Link style={{ marginLeft: "20px" }} to="/work">
            <Button variants={fade}>
              {language === "no" ? "Mitt arbeid" : "My work"}
            </Button>
          </Link>
        </motion.div>
      </Description>

      <Image
        whileTap={{
          scale: 0.5,
          rotate: 360,
        }}
      >
        <motion.img variants={photoAnimation} src={myself} alt="" />
      </Image>
    </About>
  );
};

// Styles imported from styles.js component!

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
