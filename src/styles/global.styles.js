import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
*,
*::before,
*::after {
    box-sizing: border-box;
}
body {
    font-size: 1.5rem;
    background: ${(props) => props.theme.colors.persianGreen}
 }
    
`;

export default GlobalStyle;
