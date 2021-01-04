import React from 'react'
import styled from 'styled-components';

import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <Navbar>
            <h1><Link to="/">Herms</Link></h1>
            <ul>
                <li>
                    <Link to="/"><span>.</span> About</Link>
                    
                </li>
                <li>
                    <Link to="/work"><span>.</span> Work</Link>
                    
                </li>
                <li>
                    <Link to="/contact"><span>.</span> Contact</Link>
                
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