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
    /* font-family: 'Balsamiq Sans', cursive; */
    /* font-family: 'Concert One', cursive; */
    /* font-family: 'Fontdiner Swanky', cursive; */
    /* font-family: 'Gloria Hallelujah', cursive; */
    /* font-family: 'Notable', sans-serif; */
    /* font-family: 'Permanent Marker', cursive; */
    font-family: 'Pangolin', cursive;
    letter-spacing: 0.14rem;
    color: ${(props) => props.theme.font.color.main};
    background: ${(props) => props.theme.colors.background};
 }

 button {
    /* font-family: 'Balsamiq Sans', cursive; */
    /* font-family: 'Concert One', cursive; */
    /* font-family: 'Fontdiner Swanky', cursive; */
    /* font-family: 'Gloria Hallelujah', cursive; */
    /* font-family: 'Notable', sans-serif; */
    /* font-family: 'Permanent Marker', cursive; */
    font-family: 'Pangolin', cursive;
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

export default GlobalStyle;
