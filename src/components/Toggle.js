import { motion } from 'framer-motion';
import React, {useState} from 'react';

const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(true);

    return(
        <div onClick={() => setToggle(!toggle)}>
            <motion.h4>{title}</motion.h4>
            { toggle ? children : ''}
            <div className="line"></div>
        </div>
    )
}

export default Toggle;
