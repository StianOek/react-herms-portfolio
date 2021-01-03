import React from 'react'

import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Detail = () => {
    
    const history = useHistory();
    console.log(history);


    return (
        <div>
            <h1>Work Details</h1>
        </div>
    )
    
}

export default Detail;