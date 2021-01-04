import React from 'react'
import AboutSection from '../components/AboutSection';
import RefrencesSection from '../components/RefrencesSection';
import SkillSection from '../components/SkillSection';

//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';

const AboutMe = () => {
    return(
        <motion.div exit="exit" variants={pageAnimation} animate="show" initial="hidden">
            <AboutSection />
            <SkillSection />
            <RefrencesSection />
        </motion.div>
    )
}

export default AboutMe;