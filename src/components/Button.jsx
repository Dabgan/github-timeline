import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    color: inherit;
    border: 2px solid #000;
    box-shadow: 1px 1px 2px 1px ${(props) => props.theme.colors.onyx};
    border-radius: 5px;
    font-size: ${(props) => props.theme.font.size.body.m};
    background: ${(props) => props.theme.colors.powderWhite};
    font-weight: ${(props) => props.theme.font.weight.semibold};
    text-decoration: none;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out,
        background-color 0.3s ease-in-out;

    &:hover {
        box-shadow: 3px 3px 4px 2px ${(props) => props.theme.colors.onyx};
        transform: translateY(-3px);
        background: ${(props) => props.theme.colors.lightBlue};
        color: inherit;
        text-decoration: none;
    }
`;

const Button = ({ link: submit, children }) => {
    return (
        <>
            {submit ? (
                <StyledButton type="submit">{children}</StyledButton>
            ) : (
                <StyledButton>{children}</StyledButton>
            )}
        </>
    );
};

export default Button;
