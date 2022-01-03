import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

export const Network = () => {
  return (
    <Container
      exit="exit"
      variants={pageAnimation}
      animate="show"
      initial="hidden"
    >
      <h2>Network</h2>
      <p>Network page is under development</p>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  padding: 2rem 10rem;
`;
