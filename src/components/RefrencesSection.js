import React from 'react'

import styled from 'styled-components';
import {About} from '../styles'

const RefrencesSection = () => {
    return (
        <Ref>
            <h2><span>Re</span>frences</h2>

            <div className="description">
                <h4>Zeipt, TheFactory Accelerator</h4>
                <p>This guys is one trusted guy. He delivers exactly what you want him to deliver. I recommend this guy at the highest.</p>
                <div className="line"></div>
            </div>

            <div className="description">
                <h4>Others</h4>
               
                <div className="line"></div>
            </div>
        </Ref>
    )
};

const Ref = styled(About)`
display: block;

span {
    display: block;
}

h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
}



.line {
    background: #313131;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
`

export default RefrencesSection;