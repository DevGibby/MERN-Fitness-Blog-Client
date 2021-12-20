import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    margin: auto;
    scroll-behavior: smooth;
    width: 90%;
    background: #3b5998;
    font-family: 'Oswald', sans-serif;
    letter-spacing: .5px;
    line-height: 1.5;
    @media (max-width: 1450px){
        font-size: 90%;
        width: 90%;
    } 
    @media (max-width: 1220px){
        width: 90%
    }
    @media (max-width: 750px){
        font-size: 70%;
        width: 100%;
    } 
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyles;