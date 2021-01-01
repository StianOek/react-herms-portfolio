import React from 'react'
import myself from '../img/IMG_4643.JPG';

import styled from 'styled-components';



const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Name is Stian Herms</h2>
                    </Hide>
                    <Hide>
                        <h2>Front-End developer</h2>
                    </Hide>
                    <Hide>
                        <h2>With <span>UI/UX</span> in mind</h2>
                    </Hide>
                    <p>Contact me for any web related or design ideas that you have! I am driven to fetch your ideas out to the world, weather its dekstop or mobile.</p>
                    <button>Contact me</button>
                </div>
            </Description>

            <Image>
                <img src={myself} alt="a pic of myself in about section" />
            </Image>
        
        </About>
    )
};

//Styling
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: white;

`;

const Description  = styled.div`
    flex: 1;
    padding-right: 10rem;

    h2 {
        font-weight: lighter;
    }


`

const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }

`

const Hide = styled.div`
overflow: hidden;
`


export default AboutSection;