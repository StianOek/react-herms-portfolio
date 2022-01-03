import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import WorkState, {
  WEBDEVELOPER,
  CONSULTANT,
  FRONTEND,
  BACKEND,
  UXDEVELOPER,
} from "../workState";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  LineAnimation,
} from "../Animation";
import ScrollTop from "../components/ScrollTop";

import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";

const ALL = "ALL";

const Work = () => {
  const language = useSelector((state) => state.layout.language);

  const [selectedWork, setSelectedWork] = useState(ALL);
  const handleSelectedWork = (newWork) => {
    setSelectedWork(newWork);
  };

  return (
    <>
      <Container
        exit="exit"
        variants={pageAnimation}
        animate="show"
        initial="hidden"
      >
        <AllBtnWrapper>
          <BtnWrapper>
            <Btn
              active={selectedWork === ALL || selectedWork === WEBDEVELOPER}
              variants={fade}
              animate="show"
              initial="hidden"
              type="button"
              onClick={() => {
                handleSelectedWork(WEBDEVELOPER);
              }}
            >
              {language === "no" ? "Web utvikler" : "Web developer"}
            </Btn>
            <Btn
              active={selectedWork === ALL || selectedWork === CONSULTANT}
              variants={fade}
              animate="show"
              initial="hidden"
              type="button"
              onClick={() => {
                handleSelectedWork(CONSULTANT);
              }}
            >
              {language === "no" ? "Konsulent" : "Consultant"}
            </Btn>
            <Btn
              active={selectedWork === ALL || selectedWork === BACKEND}
              variants={fade}
              animate="show"
              initial="hidden"
              type="button"
              onClick={() => {
                handleSelectedWork(BACKEND);
              }}
            >
              Back-end
            </Btn>
            <Btn
              active={selectedWork === ALL || selectedWork === FRONTEND}
              variants={fade}
              animate="show"
              initial="hidden"
              type="button"
              onClick={() => {
                handleSelectedWork(FRONTEND);
              }}
            >
              Front-End
            </Btn>
            <Btn
              active={selectedWork === ALL || selectedWork === UXDEVELOPER}
              variants={fade}
              animate="show"
              initial="hidden"
              type="button"
              onClick={() => {
                handleSelectedWork(UXDEVELOPER);
              }}
            >
              UX-Developer
            </Btn>
          </BtnWrapper>
          <ClearBtnWrapper>
            <ClearBtn
              active={selectedWork === ALL}
              variants={fade}
              animate="show"
              initial="hidden"
              type="button"
              onClick={() => {
                handleSelectedWork(ALL);
              }}
            >
              <FontAwesomeIcon
                icon={faRedo}
                size="xs"
                transform={{ rotate: 2 }}
                swapOpacity
                className="icon"
              />
              {language === "no" ? "Nullstill" : "Reset"}
            </ClearBtn>
          </ClearBtnWrapper>
        </AllBtnWrapper>

        {WorkState.filter((work) => {
          if (selectedWork !== ALL) {
            return work.categories.find(
              (category) => category === selectedWork
            );
            //const idx = work.categories.findIndex((category) => (category === selectedWork));
            // if (idx === -1) {
            //   return false;
            //}
          }
          return true;
        }).map((work) => {
          return (
            <Project key={work.id}>
              <motion.h2 variants={fade}>{work.title}</motion.h2>
              <motion.div
                variants={LineAnimation}
                className="line"
              ></motion.div>
              <Link to={work.url}>
                <Hide>
                  <motion.img
                    variants={photoAnimation}
                    src={work.image}
                    alt="project one"
                  />
                </Hide>
              </Link>
            </Project>
          );
        })}
      </Container>
      <Footer />
    </>
  );
};

const ClearBtnWrapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1300px) {
    display: flex;
    align-items: center;
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1300px) {
    display: flex;
    align-items: center;
  }
`;

const AllBtnWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  position: sticky;
`;

const ClearBtn = styled(motion.button)`
  position: relative;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  padding: 0.6rem 1.5rem;
  background: none;
  outline: none;
  color: #212121;
  transition: all 0.2s ease-in-out;
  font-family: "Poppins", monospace;

  &:hover {
    color: #23d997;
    transform: scale(1.1);
    animation-name: reset;
    animation-timing-function: ease;
  }

  .icon {
    margin-right: 15px;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  @keyframes reset {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(120deg);
    }
  }
`;

const Btn = styled(motion.button)`
  position: relative;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  font-family: "Poppins", monospace;
  border: none;
  margin: 1rem;
  background: ${(props) => (props.clicked ? "#23d997" : "transparent")};
  opacity: ${(props) => `${props.active ? 1 : 0.5} !important`};
  outline: none;
  color: #212121;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #23d997;
  }
  &:hover::before {
    top: 2rem;
  }

  &:before {
    content: "";
    position: absolute;
    border-bottom: 1px solid #23d997;
    display: block;
    width: 100%;
    top: 1.5rem;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 1300px) {
    margin: 1rem;
  }
`;

const Container = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 0 10rem;

  h2 {
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
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Work;
