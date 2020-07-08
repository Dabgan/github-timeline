import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
    type: props.submit ? "submit" : "",
}))`
    border: 3px solid ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.font.size.body.xs};
    padding: ${(props) => props.theme.padding.xs};
    line-height: 2;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s;
    :hover {
        color: black;
    }
    ::after {
        content: "";
        position: absolute;
        z-index: -1;
        -webkit-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        background: ${(props) => props.theme.colors.secondary};
    }
    :hover {
        ::after {
            width: 100%;
        }
    }
    :active {
        ::after {
            width: 100%;
        }
    }
`;

const Button = ({ onClick, submit, children }) => {
    return (
        <StyledButton submit={submit} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
