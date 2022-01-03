import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Side from "../Sidebar/Side";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../actions/toggleAction";
import { setLanguage } from "../../actions/language";

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import nor from "../../img/no.svg";
import eng from "../../img/en.svg";

const Nav = () => {
  const { pathname } = useLocation();

  // Redux
  const language = useSelector((state) => state.layout.language);
  const menuOpen = useSelector((state) => state.layout.menuOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar>
        <MenuLabel onClick={() => dispatch(toggleMenu(menuOpen))}>
          <Icon clicked={menuOpen}></Icon>
        </MenuLabel>
        <Side clicked={menuOpen} />
        <LogoWrapper>
          <Link to="/">
            <Logo>SIH</Logo>
          </Link>
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
        </LogoWrapper>
        <ul>
          <li>
            <Link to="/">{language === "no" ? "Biografi" : "Biography"}</Link>
          </li>
          <li>
            <Link to="/work">
              {language === "no" ? "Web utvikling" : "Web development"}
            </Link>
          </li>
          <li>
            <Link to="/network">
              {language === "no" ? "Nettverk" : "Network"}
            </Link>
          </li>
          <li>
            <Link to="/contact">
              {language === "no" ? "Kontakt" : "Contact"}
            </Link>
          </li>
          <Icons>
            <a href="https://www.linkedin.com/in/stian-ihler-4970931ab/">
              <h3 style={{ fontSize: "30px" }}>
                <FaLinkedinIn />
              </h3>
            </a>
            <a href="https://www.instagram.com/zero_to_hero_developer/">
              <h3 style={{ fontSize: "30px" }}>
                <FaInstagram />
              </h3>
            </a>
          </Icons>
        </ul>
      </Navbar>
    </>
  );
};

const Icons = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  width: 80px;
  margin-left: 50px;
  justify-content: space-between;
  h3 {
    cursor: pointer;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  border: 2px solid #fff;
  padding: 5px 15px;
  border-radius: 15px;
  cursor: pointer;
  z-index: 4;
  transition: 0.3s ease all;
  :hover {
    transform: scale(1.05);
    transition: 0.3s ease all;
  }
`;

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
  background: #010101;
  position: sticky;
  top: 0;
  z-index: 99999;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 300;
    transition: 0.3s ease;
    @media (max-width: 1300px) {
      font-size: 1rem;
      margin-left: 2rem;
    }
  }

  a:hover {
    transition: 0.3s ease;
    color: #cccccc;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    text-align: center;
    @media (max-width: 1300px) {
      display: none;
      list-style: none;
    }
  }

  li {
    margin-right: 2rem;
    position: relative;
  }

  h1 {
    transition: all 0.1s ease-in-out;
  }

  h1:hover {
    transform: rotate(45deg);
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
    justify-content: center;
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
  background-color: ${(props) => (props.clicked ? "transparent" : "#23d997")};
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
    background-color: #fff;
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
