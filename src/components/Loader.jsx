import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";
import spinner2Icon from "@iconify/icons-icomoon-free/spinner2";

const rotate = keyframes`
   0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
`;

const LoaderIcon = styled.div`
    font-size: ${(props) => props.size}rem;
    margin: 1rem auto;
    display: ${(props) => (props.loading ? "inherit" : "none")};
    animation: ${rotate} 1.3s infinite linear;
`;

const Loader = ({ loading, size }) => {
    return (
        <LoaderIcon
            as={Icon}
            icon={spinner2Icon}
            loading={loading}
            size={size}
        ></LoaderIcon>
    );
};

export default Loader;
