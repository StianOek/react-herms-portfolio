import React from 'react'

import styled from 'styled-components';

import {Link} from 'react-router-dom';

import work from '../img/Zeipt.png';
import work2 from '../img/Storebrand.jpg';

const Work = () => {
    return(
        <Container>
            <Project>
                <h2>The Zeipt Project</h2>
                <div className="line"></div>
                <Link to="/work/zeipt">
                    <img src={work} alt="project one"/>
                </Link>
            </Project>
            <Project>
                <h2>Storebrand</h2>
                <div className="line"></div>
                <Link>
                    <img src={work2} alt="project two"/>
                </Link>
            </Project>
        </Container>
    )
};


const Container = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2{
        padding: 1rem 0rem;
    }
`;

const Project = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.2rem;
        background: #212121;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default Work;