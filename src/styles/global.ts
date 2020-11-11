import {createGlobalStyle} from 'styled-components';
import backgroundsuper from '../assets/marvel.svg';

export default createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

}

body {
    background: #aeaeae url(${backgroundsuper}) no-repeat 110% top;
    background-size: 50%;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px Roboto, sans-serif;
}

#root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
}

button{
    cursor: pointer;
}
`;
