import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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

export const MainContainer = styled.div`
    border: 2px solid #f11b1b;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export default GlobalStyle;
