import { motion } from 'framer-motion';
import React, {useState} from 'react';
import styled from 'styled-components';




const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(false);

    return(
        <motion.div layout onClick={() => setToggle(!toggle)}>
            <Title layout whileHover={{ x: 10}}>{title}</Title>
            { toggle ? children : ''}
            <div layout className="line"></div>
        </motion.div>
    )
}

const Title = styled(motion.h4)`
cursor: pointer;

`

export default Toggle;
