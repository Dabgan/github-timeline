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
    font-size: 14px;
    font-family: ${(props) => props.theme.font.family.main};
    letter-spacing: 0.14rem;
    color: ${(props) => props.theme.font.color.main};
    background: ${(props) => props.theme.colors.background};
 }

 button {
    font-family: ${(props) => props.theme.font.family.main};
    letter-spacing: 0.0625em;
 }
    
`;

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    padding: 1.5rem;
    @media (min-width: 320px) and (max-width: 1181px) {
        margin: 1rem 0;
        width: 100%;
        justify-content: space-between;
    }
`;

export default GlobalStyle;
