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
`;

export const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.m};
    margin-bottom: ${(props) => props.theme.margin.s};
`;

export const Container = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
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
`;

export const ErrorMsg = styled.div`
    color: ${(props) => props.theme.colors.error} !important;
    margin-top: ${(props) => props.theme.margin.xs};
`;
