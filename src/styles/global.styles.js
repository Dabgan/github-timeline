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
    /* font-family: 'Balsamiq Sans', cursive; */
    /* font-family: 'Concert One', cursive; */
    /* font-family: 'Fontdiner Swanky', cursive; */
    /* font-family: 'Gloria Hallelujah', cursive; */
    /* font-family: 'Notable', sans-serif; */
    /* font-family: 'Permanent Marker', cursive; */
    font-family: 'Pangolin', cursive;
    letter-spacing: 0.25rem;
    color: ${(props) => props.theme.font.color.main};
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
    border: 2px solid #f11b1b;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export default GlobalStyle;
