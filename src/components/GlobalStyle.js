import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1300px) {
        font-size: 0.7rem;
    }
    
};

body {
    background: white;
    font-family: 'Source Sans Pro', sans-serif;
    overflow-X: hidden;
}


.title_one{
    font-size: 2.5rem;
}
.title_three {
    font-size: 2rem;
}

h2 {
    font-weight: lighter;
    font-size: 2rem;
    letter-spacing: .6rem;
    color: #212121;
    line-height: 4rem;
    text-transform: uppercase;
}

h3 {
     color: #212121;
}

h4 {
    font-weight: bold;
    color: #212121;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
}

a {
    font-size: 1rem;
}
span { 
    font-weight: bold;
    color: #23d997; 
}

p {
    padding: 3rem 0rem;
    color: #212121;
    font-size: 1.4rem;
    line-height: 150%;
}

.ref_p {
    font-style: italic;
    font-size: 1.2rem;
}

`



export default GlobalStyle;