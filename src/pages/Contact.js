import React from 'react'

//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';

const Contact = () => {
    return(
        <motion.div exit="exit" variants={pageAnimation} animate="show" initial="hidden" >
            <h2>Coming soon!</h2>
        </motion.div>
        
    )
}

export default Contact;