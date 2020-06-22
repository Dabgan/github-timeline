import React from "react";
import Button from "../../components/Button";
import styled from "styled-components";
import FormControl from "../../components/FormControl";

const MainContainer = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.m};
    margin-bottom: ${(props) => props.theme.margin.s};
`;

const MainPage = () => {
    return (
        <MainContainer>
            <Title>Github timeline</Title>
            <FormControl />
            <Button link={"/timeline"}>Show commits</Button>
        </MainContainer>
    );
};

export default MainPage;
