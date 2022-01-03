import { createGlobalStyle } from "styled-components";

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
    //font-family: 'Poppins', sans-serif;
    font-family: 'Noto Sans Mono', monospace;
    overflow-X: hidden;
    color: #454545;
}

h2,h3,h4,h5,h6,p,a {
    font-size: 16px;
}

h1 {
    font-size: 42px;
    margin-bottom: 2rem;
    @media (max-width: 1000px) {
        font-size: 30px;
    }
}

h2 {
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: .3rem;
    line-height: 2rem;
    text-transform: uppercase;
}

h3 {
}

h4 {
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.2rem;
}

a {
    font-size: 1rem;
    font-weight: 300;
}
span { 
    font-weight: 500;
    color: #23d997; 
}

p {
    padding: 2rem 0rem;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    @media (max-width: 500px) {
        font-size: 12px;
    }
  
    
}

.ref_p {
    font-style: italic;
    font-size: 1.2rem;
}

`;

export default GlobalStyle;
