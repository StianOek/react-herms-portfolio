import React, { useEffect }from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Side from '../Sidebar/Side';


import {useSelector, useDispatch} from 'react-redux';
import { toggleMenu } from '../../actions/toggleAction';
import { setLanguage } from '../../actions/language';

import nor from '../../img/no.svg';
import eng from '../../img/en.svg';


const Nav = () => {

    
    
    
    const {pathname} = useLocation();
    
    // Redux
    const language = useSelector(state => state.layout.language);
    const menuOpen = useSelector(state => state.layout.menuOpen);
    const dispatch = useDispatch();

    
   
   console.log(language)

    return(
        <>
        <Navbar>
        
            <h1><Link to="/">Herms</Link></h1>
            
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

            <MenuLabel onClick={() => dispatch(toggleMenu(menuOpen))} >
                <Icon clicked={menuOpen}></Icon>
            </MenuLabel>
            <Side clicked={menuOpen}/>
            <ul>
                <li>
                    <Link to="/"><span>.</span>
                    {language === "no" ? "Om" : "About"}
                    </Link>
                    <UnderLine transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/' ? "23%" : "0%"}}/>
                    
                </li>
                <li>
                    <Link to="/work"><span>.</span> 
                    {language === "no" ? "Jobb" : "Work"}
                    </Link>
                    <UnderLine transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/work' ? "20%" : "0%"}}/>
                </li>
                <li>
                    <Link to="/contact"><span>.</span>
                    {language === "no" ? "Kontakt" : "Contact"}
                    </Link>
                    <UnderLine transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === '/contact' ? "27%" : "0%"}}/>
                </li>
            </ul>
            
        </Navbar>
        
        
     
        </>

    )
};

export const Flags = styled.div`
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	margin-left: 60px;
	@media (max-width: 1300px) {
		display: none;
	}
	
`;
export const Lang = styled.img`
	width: 22px;
	margin-left: 20px;
	cursor: pointer;
	top: -3px;
	opacity: ${(props) => (props.active ? 1 : 0.5)};
	border-bottom: ${(props) => (props.active ? "1px solid" : "none")};

	&:first-child {
		margin-left: 0px;
	}
    @media (max-width: 1300px) {
		display: none;
	}
`;

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
    @media (max-width: 1300px){
        font-size: 1.5rem;
        margin-left: 2rem;
    }
}
ul {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    @media (max-width: 1300px) {
        display: none;
    }
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
    
    
    padding: 2rem 0rem;
    padding: 1rem;
        ul {
            padding: 2rem;
            
            width: 100%;
        }
        li {
            padding: 0;
        }

        #logo {
            display: inline-block;
            margin: 4rem;
            font-size: 5rem;
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
`;



//Hamburger styles
const MenuLabel = styled.div`
    display: none;
 

    @media (max-width: 1300px) {
        display: flex;
        justify-content:center;
        align-items: center;
        position: absolute;
        width: 2rem;
        height: 1.5rem;
        top: 2.5rem;
        right: 1rem;
        transform: translate(-100%, 60%);
        cursor: pointer;
        z-index: 600;
    }

   
`;

const Icon = styled.span`
  position: relative;
  background-color:${(props) => (props.clicked ? "transparent" : "#23d997")} ;
  width: 2rem;
  height: 2px;
  right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 2.4rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    background-color: #212121;
    transition: all 0.3s;
    
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
 
 

`;





export default Nav;

