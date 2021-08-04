import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import { setLanguage } from '../../actions/language';

import nor from '../../img/no.svg';
import eng from '../../img/en.svg';



const Side = () => {
    const language = useSelector(state => state.layout.language);

    const {pathname} = useLocation();

    const menuOpen = useSelector(state => state.layout.menuOpen);
    const dispatch = useDispatch();

    return(
        <SideContainer 
            clicked={menuOpen} 
            onClick={() => dispatch({type: 'TOGGLED'})} >
            <SidebarWrapper>
                <li style={{listStyle: "none"}}>
                    <Link 
                        to="/">
                        {language === "no" ? "Biografi" : "Biography"}
                        <span>
                           
                        </span>
                    </Link>
                    
                </li>
                <li style={{listStyle: "none"}}>
                    <Link 
                        to="/work">
                        {language === "no" ? "Web utvikling" : "Web development"}
                        <span>
                           
                        </span>
                    </Link>
                    
                </li>
                <li style={{listStyle: "none"}}>
                    <Link 
                        to="/network">
                        {language === "no" ? "Nettverk" : "Network"}
                        <span>
                           
                        </span>
                    </Link>
                   
                </li>
                <li style={{listStyle: "none"}}>
                    <Link 
                        to="/contact">
                        {language === "no" ? "Kontakt" : "Contact"}
                        <span>
                           
                        </span>
                    </Link>
                    
                </li>

                <Flags className="desktop">
                    <Lang
                        src={nor}
                        alt="Norwegian"
                        active={language === "no"}
                        onClick={() => dispatch(setLanguage({ language: "no" }))}
                    />
                    <Lang
                        active={language === "en"}
                        alt="English"
                        src={eng}
                        onClick={() => dispatch(setLanguage({ language: "en" }))}
                    />
                </Flags> 

            </SidebarWrapper>
        </SideContainer>
    )
}

export default Side;

const Flags = styled.div`
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

	
`;
const Lang = styled.img`
	width: 22px;
	margin-left: 20px;
	cursor: pointer;
	top: -3px;
	opacity: ${(props) => (props.active ? 1 : 0.5)};
	border-bottom: ${(props) => (props.active ? "1px solid" : "none")};

	&:first-child {
		margin-left: 0px;
	}
   
`;

const SideContainer = styled.aside`
    position: fixed;
    z-index: -2222;
    width: 50%;
    height: 90vh;
    margin: 10vh 0;
    background: #222222;
    display: grid;
    align-items: center;
    top: 0;
    right: ${(props) => (props.clicked ? "0" : "-50%")};
    transition: 0.3s ease-in-out;
    opacity: 1;
   

    @media (min-width: 1300px) {
        display: none;
    }


    a {
        display: flex;
        padding: 2rem 0rem;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        text-decoration: none;
        list-style-type: none;
        transition: 0.1s ease-in-out;
        color: #757575;
        cursor: pointer;

        &:hover {
            color: #23d997;
        }
    }

    li {
        text-align: start;
        width: 100%;
        border-top: #212121 solid 1px;
        border-bottom: #363636 solid 1px;
    }


`;

const SidebarWrapper = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    
`;


