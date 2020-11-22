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
html {
    scrollbar-color: ${({ theme }) => theme.colors.coralBlue}
        ${({ theme }) => theme.colors.grey};
}
body {
    font-size: 14px;
    font-family: ${(props) => props.theme.font.family.main};
    letter-spacing: 0.14rem;
    color: ${(props) => props.theme.font.color.main};
    background: ${(props) => props.theme.colors.background};

    ::-webkit-scrollbar {
        width: 16px;
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.grey};
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.coralBlue};
        border: 1px solid ${({ theme }) => theme.main};
    }

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
    padding: ${(props) => props.theme.padding.xs};
    @media ${(props) => props.theme.device.tablet} {
        justify-content: ${(props) =>
            props.loading ? "center" : "flex-start"};
        padding: ${(props) => props.theme.padding.s};
        padding-top: ${(props) => (props.loading ? "0" : props.theme.margin.s)};
    }
    @media ${(props) => props.theme.device.phone} {
        padding-top: ${(props) => props.theme.padding.s};
        align-items: center;
        text-align: center;
        max-height: 100vh !important;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    padding: 1.5rem;
    @media ${(props) => props.theme.device.smallPhone} {
        margin: 1rem 0;
        width: 100%;
        justify-content: space-between;
    }
`;

export default GlobalStyle;

// html {
//     font-size: 62.5%;
//
// }
// body {
//     background-color: ${({ theme }) => theme.background};
//     font-family: ${({ theme }) => theme.fonts.family.main};
//     padding-top: 2rem;

//     ${({ theme }) => theme.mq.lg} {
//         padding-top: 5rem;
//     }

// }
