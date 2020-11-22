import styled from "styled-components";
import time from "./../../assets/images/time.jpg";

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${time});
    background-size: 100% auto;
    background-repeat: no-repeat;
    @media ${(props) => props.theme.device.phone} {
        padding: 0;
        background: rgb(252, 201, 38);
        background: linear-gradient(
            0deg,
            rgba(252, 201, 38, 1) 0%,
            rgba(6, 5, 1, 1) 75%
        );
    }
    @media ${(props) => props.theme.device.tablet} {
        background-size: 100% 100%;
    }
`;

export const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.m};
    margin-bottom: ${(props) => props.theme.margin.s};
    line-height: ${(props) => props.theme.font.size.header.m};
    text-shadow: 3px 3px 3px ${(props) => props.theme.colors.grey};
    @media ${(props) => props.theme.device.phone} {
        margin-bottom: ${(props) => props.theme.margin.xs};
    }
`;

export const Container = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: ${(props) => props.theme.padding.l};
    button {
        margin-top: ${(props) => props.theme.margin.s};
    }
`;

export const Label = styled.label`
    margin-bottom: ${(props) => props.theme.margin.xs};
    font-size: ${(props) => props.theme.font.size.body.s};
`;

export const Input = styled.input`
    border: 3px solid ${(props) => props.theme.colors.secondary};
    padding: ${(props) => props.theme.padding.xs};
    font-size: ${(props) => props.theme.font.size.body.m};
    border-radius: ${(props) => props.theme.borderRadius};
    outline: none;
    ::placeholder {
        color: inherit;
    }
`;

export const ErrorMsg = styled.div`
    color: ${(props) => props.theme.colors.error} !important;
    margin-top: ${(props) => props.theme.margin.xs};
`;
