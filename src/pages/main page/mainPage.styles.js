import styled from "styled-components";

export const MainContainer = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.m};
    margin-bottom: ${(props) => props.theme.margin.s};
`;

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.padding.s};
`;

export const Label = styled.label`
    margin-bottom: ${(props) => props.theme.margin.xs};
`;

export const Input = styled.input`
    padding: ${(props) => props.theme.padding.s};
    font-size: ${(props) => props.theme.font.size.body.m};
`;
