import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';

const Side = () => {

    const {pathname} = useLocation();

    const menuOpen = useSelector(state => state.menuOpen);
    const dispatch = useDispatch();

    return(
        <SideContainer clicked={menuOpen} onClick={() => dispatch({type: 'TOGGLED'})} >
            <SidebarWrapper>
                <li>
                    <Link to="/">About<span>.</span></Link>
                    <UnderLine transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/' ? "30%" : "0%"}}/>
                </li>
                <li>
                    <Link to="/work">Work<span>.</span></Link>
                    <UnderLine transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/work' ? "30%" : "0%"}}/>
                </li>
                <li>
                    <Link to="/contact">Contact<span>.</span></Link>
                    <UnderLineTwo transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/contact' ? "30%" : "0%"}}/>
                </li>
            </SidebarWrapper>
        </SideContainer>
    )
}

export default Side;

const SideContainer = styled.aside`
    position: fixed;
    z-index: 599;
    width: 200px;
    height: 100vh;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    right: ${(props) => (props.clicked ? "0" : "-200px")};
    transition: 0.3s ease-in-out;
    opacity: 1;
    border-left: 1px solid #23d997;

    @media (min-width: 1300px) {
        display: none;
    }


    a {
        display: flex;
        padding: 2rem 0rem;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        font-family: 'Roboto Mono', sans-serif;
        text-decoration: none;
        list-style-type: none;
        transition: 0.1s ease-in-out;
        color: #212121;
        cursor: pointer;

        &:hover {
            color: #23d997;
        }
    }


`;

const SidebarWrapper = styled.div`
    color: #fff;
`;


const UnderLine = styled(motion.div)`
position: relative;
height: 0.05rem;
background: #29d997;
width: 0%;
position: absolute;
top: 75%;
left: 67%;
transform: translate(-100%, -50%);
`;

const UnderLineTwo = styled(motion.div)`
position: relative;
height: 0.05rem;
background: #29d997;
width: 0%;
position: absolute;
top: 75%;
left: 71%;
transform: translate(-100%, -50%);
`;

