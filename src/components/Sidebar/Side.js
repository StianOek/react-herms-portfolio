import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {useSelector, useDispatch} from 'react-redux';

const Side = () => {

    const menuOpen = useSelector(state => state.menuOpen);
    const dispatch = useDispatch();
    

    return(
        <SideContainer clicked={menuOpen} onClick={() => dispatch({type: 'TOGGLED'})}>
            <SidebarWrapper>
                <Link to="/">
                    about
                </Link>
                <Link to="/work">
                    work
                </Link>
                <Link to="/contact">
                    contact
                </Link>
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
    background: #f1f1f1;
    display: grid;
    align-items: center;
    top: 0;
    right: ${(menuOpen) => (menuOpen.clicked ? "0" : "-200px")};
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
        text-transform: uppercase;
        font-size: 2rem;
        text-decoration: none;
        list-style-type: none;
        transition: 0.1s ease-in-out;
        color: #23d997;
        cursor: pointer;

        &:hover {
            color: #212121;
        }
    }


`;

const SidebarWrapper = styled.div`
    color: #fff;
`;


