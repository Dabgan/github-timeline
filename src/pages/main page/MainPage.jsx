import React from "react";
import Button from "../../components/Button";
import styled from "styled-components";

const MainContainer = styled.div`
    border: 2px solid #f11b1b;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const MainPage = () => {
    return (
        <MainContainer>
            <h1>Github timeline</h1>
            <label htmlFor="username">Github username</label>
            <input id="username" name="username" type="text" />
            <Button link={"/timeline"}>Show commits</Button>
        </MainContainer>
    );
};

export default MainPage;
