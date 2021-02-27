import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import  WorkState from "../workState";
import vid from '../Video/typing.mp4';

//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';




const Detail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [work, setWork] = useState([]);
    

    //UseEffect
    useEffect(() => {
        const currentWork = WorkState.find((stateWork) => stateWork.url === url);
        if(currentWork) {
            setWork([currentWork]);
        }
        
      }, [WorkState, url,]);
      
      

    return (
       <>
        {work.map((item) => <Container key={item.id} exit="exit" variants={pageAnimation} animate="show" initial="hidden">
                <Headline>
                <h2>{item.title}</h2>
                <h3>{item.jobTitle}</h3>
                    <Imgwrap>
                        <img src={item.mainImg} alt="main img" />
                        <img src={item.pic} alt="main img" />
                        <img src={item.pic2} alt="main img" />
                    </Imgwrap>
                    <Desc>
                        {item.desc.map((info) => (
                            <Info 
                            title={info.title}
                            description={info.description}
                            tools={info.tools}
                            key={info.title} />
                        ))}
                    </Desc>
                    
                    
                </Headline>
           
            </Container>) 
            
           
                     
        } 
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
h3 {
    text-align: center;
    margin-bottom: 100px;
}
img {
    width: 30%;
    height: 30vh;
    object-fit: cover;
    margin: 10px;
}

@media (max-width: 1300px) {
        margin-top: 2rem;
        padding: 2rem 2rem;
        font-size: 0.5rem;
        h3{
        font-size: 1.2rem;
    }
    }

    img {
        height: 20vh;
    }

    h2 {
        position: relative;
        text-align: center;
        padding: 2rem;
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

@media (max-width: 1300px) {
    margin: 0;
}

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
    @media (max-width: 1300px) {
        font-size: 1rem;
        
    }
    
}
video {
    width: 100%;
    height: 20vh;
    object-fit: cover;
    
    
}
@media (max-width: 1300px) {
        align-items: center;
        justify-content: center;
        text-align: center;
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