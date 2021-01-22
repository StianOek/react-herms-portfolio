import React from 'react'
import styled from 'styled-components';


const Navbar = () => {
    return(
        <Navcontainer>
            <NavWrapper>
                <Logo>Logo</Logo>
                <NavLinks>
                    <NavLink>
                        About
                    </NavLink>
                    <NavLink>
                        Work
                    </NavLink>
                    <NavLink>
                        Contact
                    </NavLink>
                </NavLinks>
            </NavWrapper>
        </Navcontainer>
    )
}

export default Navbar;

const Navcontainer = styled.div`
background-color: #23d997;

@media (max-width: 1300px) {
        
      
}

`;

const NavWrapper = styled.div`
color: white;
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1000px;
margin: 0 auto;
padding: 15px 20px;
`;

const Logo = styled.div`
flex: .6;
display: flex;
align-items: center;
cursor: pointer;
`;

const NavLinks = styled.ul`
flex: .4;
display: flex;
justify-content: space-evenly;
align-items: center;
`;

const NavLink = styled.li`
list-style: none;
cursor: pointer;
font-size: 18px;
`