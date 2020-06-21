import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-size: 3rem;
        background: ${(props) => props.theme.colors.persianGreen}
    }
`;

export default GlobalStyle;
