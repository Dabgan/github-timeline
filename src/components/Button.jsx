import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
    type: props.submit ? "submit" : "",
}))`
    display: inline-block;
    position: relative;
    border: 3px solid ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.font.size.body.xs};
    padding: ${(props) => props.theme.padding.xs};
    line-height: 2;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transform: translateY(0px);
        ::after {
            transform: translate3D(0, 0, 0);
            transition: all 0.5s;
        }
    }
    &::after,
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: ${(props) => props.theme.colors.lightBlue};
        z-index: -1;
        transition: all 0.5s;
        transform: translate3D(-101%, 0, 0);
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
