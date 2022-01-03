import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import WorkState from "../workState";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Detail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [work, setWork] = useState([]);
  console.log(url);

  // Set current path to state URL
  useEffect(() => {
    const currentWork = WorkState.find((stateWork) => stateWork.url === url);
    if (currentWork) {
      setWork([currentWork]);
    }
  }, [WorkState, url]);

  return (
    <>
      {work.map((item) => (
        <Container
          key={item.id}
          exit="exit"
          variants={pageAnimation}
          animate="show"
          initial="hidden"
        >
          <Headline>
            <h2>{item.title}</h2>
            <h3>{item.jobTitle}</h3>

            <Imgwrap>
              <img src={item.mainImg} alt="main img" />
              <img src={item.pic} alt="main img" />
              <img src={item.pic2} alt="main img" />
            </Imgwrap>
            <Desc>
              {item.desc.map((info) => (
                <Info
                  title={info.title}
                  desc={info.desc}
                  descTwo={info.descTwo}
                  link={info.link}
                  zeiptLandingPage={info.zeiptLandingPage}
                  zeiptGetStartedPage={info.zeiptGetStartedPage}
                  tools={info.tools}
                  key={info.title}
                />
              ))}
            </Desc>
          </Headline>
        </Container>
      ))}
    </>
  );
};

const Info = ({
  title,
  desc,
  link,
  tools,
  zeiptLandingPage,
  zeiptGetStartedPage,
}) => {
  return (
    <InfoStyle>
      <h4>Tools:</h4>
      <p>{tools}</p>
      <p>{desc}</p>
      <Imgwrap>
        <img className="landing" src={zeiptLandingPage} alt="zeipt" />
        <img className="landing" src={zeiptGetStartedPage} alt="zeipt" />
      </Imgwrap>
    </InfoStyle>
  );
};

export default Detail;

const Alink = styled.a`
  color: #333333;
  font-size: 32px;
`;

const Container = styled(motion.div)`
  color: #212121;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
  img {
    width: 30%;
    height: 30vh;
    object-fit: cover;
    margin: 10px;
    border-radius: 10px;
  }

  @media (max-width: 1300px) {
    margin-top: 2rem;
    padding: 2rem 2rem;
    font-size: 0.5rem;
    h3 {
      font-size: 1.2rem;
    }
  }
  img {
    height: 20vh;
  }
  h2 {
    position: relative;
    text-align: center;
    padding: 2rem;
  }
`;
const Imgwrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }

  .landing {
    border: 1px solid #212121;
  }
`;

const Desc = styled.div`
  min-height: 10vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    margin: 0;
  }
`;

const InfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  p {
    font-weight: 500;
  }
  .line {
    width: 50%;
    background: #333333;
    height: 0.1rem;
    margin: 1rem 0rem;
  }
  p {
    font-size: 1rem;
    @media (max-width: 1300px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 1300px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
