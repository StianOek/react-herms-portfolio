import React, {useState, useEffect} from 'react'

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { WorkState } from "../workState";

import vid from '../Video/typing.mp4';


//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';

const Detail = () => {
    
    const history = useHistory();
    const url = history.location.pathname;
    const [works, setWorks] = useState(WorkState);
    const [work, setWork] = useState(null);
    

    //UseEffect
    useEffect(() => {
        const currentWork = works.filter((stateWork) => stateWork.url === url);
        setWork(currentWork[0]);
        
      }, [works, url]);
      console.log(work)
      

    return (
        <>
        {work && (
            <Container exit="exit" variants={pageAnimation} animate="show" initial="hidden">
                <Headline>
                <h2>{work.title}</h2>
                    <Imgwrap>
                        <img src={work.mainImg} alt="main img" />
                        <img src={work.pic} alt="main img" />
                        <img src={work.pic2} alt="main img" />
                    </Imgwrap>
                    <Desc>
                        {work.desc.map((info) => (
                            <Info 
                            title={info.title}
                            description={info.description}
                            tools={info.tools}
                            key={info.title} />
                        ))}
                    </Desc>
                    
                    
                </Headline>
           
            </Container>

        )}
        </>
    )
    
};

const Container = styled(motion.div)`
color: #212121;
`;

const Headline = styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}
img {
    width: 30%;
    height: 30vh;
    object-fit: cover;
    margin: 10px;
}

`;
const Imgwrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

`;

const Desc = styled.div`
min-height: 10vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;

`;

const InfoStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
h3{
    font-size: 2rem;
}
.line {
    width: 50%;
    background: #23d997;
    height: 0.2rem;
    margin: 1rem 0rem;

}

p{
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    
}
video {
    width: 100%;
    height: 20vh;
    object-fit: cover;
    
    
}
`;


const Info = ({title, description, tools}) => {
    return(
        <InfoStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
            <p>{tools}</p>
            <video src={vid} autoPlay="on" loop="on" muted="on" />
            
            
        </InfoStyle>
    )
}


export default Detail;