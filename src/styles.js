import styled from 'styled-components';

import {motion} from 'framer-motion';

 export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: white;

    @media (max-width: 1300px) {
        display: block;
        padding: 8rem 2rem;
        text-align: center;
        
    }

`;

export const Description  = styled.div`
    flex: 1;
    padding-right: 10rem;
    z-index: 2;

    h2 {
        font-weight: lighter;
    }

    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
            font-size: 1rem;
            outline: none;
        }
    }


`

export const Image = styled(motion.div)`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    transform: rotate(45deg), scale(0,4);
    


    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
        
        
        
    }


    @media (max-width: 1300px) {
        img {
            width: 100%;
            height: 40vh;
            object-fit: cover;
            margin-top: 4rem;
        }
    }

`

export const Hide = styled.div`
overflow: hidden;
`