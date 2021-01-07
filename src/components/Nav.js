import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

import {Link} from 'react-router-dom';

const Nav = () => {

    const {pathname} = useLocation();

    return(
        <Navbar>
            <h1><Link to="/">Herms</Link></h1>
            <ul>
                <li>
                    <Link to="/"><span>.</span> About</Link>
                    <UnderLine transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/' ? "23%" : "0%"}}/>
                    
                </li>
                <li>
                    <Link to="/work"><span>.</span> Work</Link>
                    <UnderLine transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/work' ? "20%" : "0%"}}/>
                </li>
                <li>
                    <Link to="/contact"><span>.</span> Contact</Link>
                    <UnderLine transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/contact' ? "27%" : "0%"}}/>
                </li>
            </ul>
        </Navbar>
    )
};

const Navbar = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
border-bottom: 1px solid #23d991;
background: white;
position: sticky;
top: 0;
z-index: 999;


a{
    color: #212121;
    text-decoration: none;
}
ul {
    display: flex;
    list-style: none;
}

li {
    padding-left: 10rem;
    position: relative;
}

#logo {
    font-size: 1.2rem;
    font-family: 'Roboto Mono', monospace;
    font-weight: lighter;

}

@media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0rem;
    padding: 1rem;
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        li {
            padding: 0;
        }

        #logo {
            display: inline-block;
            margin: 2rem;
        }
}


`;

const UnderLine = styled(motion.div)`
height: 0.05rem;
background: #29d997;
width: 0%;
position: absolute;
top: 130%;
left: 100%;
transform: translate(-100%, -50%);



`

export default Nav;