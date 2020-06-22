import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.padding.s};
`;

const Label = styled.label`
    margin-bottom: ${(props) => props.theme.margin.xs};
`;

const Input = styled.input`
    padding: ${(props) => props.theme.padding.s};
    font-size: ${(props) => props.theme.font.size.body.m};
`;

const FormControl = () => {
    return (
        <Container>
            <Label htmlFor="username">Github username</Label>
            <Input id="username" name="username" type="text" />
        </Container>
    );
};

export default FormControl;
