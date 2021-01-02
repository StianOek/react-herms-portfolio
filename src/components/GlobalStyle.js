import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: white;
    font-family: 'Source Sans Pro', sans-serif;
}

button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #212121;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997; 
        color: white;
    }
   
}

h2 {
    font-weight: lighter;
    font-size: 3rem;
    letter-spacing: .5rem;
    color: #212121;
    text-transform: uppercase;

}
h3{
     color: #212121;
}
h4{
    font-weight: bold;
    
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

`

export default GlobalStyle;