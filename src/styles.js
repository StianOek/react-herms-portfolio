import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 10rem;

  @media (max-width: 1300px) {
    display: block;
    padding: 8rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 2;
  padding-right: 10rem;
  p {
    border-top: 1px solid black;
  }

  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
      font-size: 1rem;
      font-weight: 300;
      outline: none;
    }
  }
`;

export const Image = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  transform: rotate(45deg), scale(0, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      width: 40%;
      object-fit: cover;
      margin-top: 4rem;
      border-radius: 20px;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
