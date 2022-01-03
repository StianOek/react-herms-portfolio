import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

// reusable toggle component. all it takes is to wrap Toggle around another component!

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <Title layout whileHover={{ x: 4 }}>
        {title}
      </Title>
      {toggle ? children : ""}

      <motion.div layout className="line"></motion.div>
    </motion.div>
  );
};

const Title = styled(motion.h4)`
  cursor: pointer;
`;

export default Toggle;
