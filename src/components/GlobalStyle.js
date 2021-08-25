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
    font-family: 'Poppins', sans-serif;
    overflow-X: hidden;
}

h1 {
    color: #212121;
    font-size: 50px;
    margin-bottom: 2rem;
}

h2 {
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: .3rem;
    color: #212121;
    line-height: 2rem;
    text-transform: uppercase;
}

h3 {
     color: #212121;
}

h4 {
    font-weight: bold;
    color: #212121;
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
    color: #212121;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.8;
  
    
}

.ref_p {
    font-style: italic;
    font-size: 1.2rem;
}

`



export default GlobalStyle;