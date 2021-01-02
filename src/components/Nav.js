import React from 'react'
import styled from 'styled-components';

const Nav = () => {
    return(
        <Navbar>
            <h1><a id="logo" href="#">Herms</a></h1>
            <ul>
                <li>
                    <a href="#">. About</a>
                </li>
                <li>
                    <a href="#">. Work</a>
                </li>
                <li>
                    <a href="#">. Contact</a>
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
background-color: #23d991;


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


`;

export default Nav;