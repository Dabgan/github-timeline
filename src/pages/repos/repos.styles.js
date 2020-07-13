import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    width: 68rem;
    height: 31.5rem;
    margin-top: ${(props) => props.theme.margin.s};
    overflow: auto;
`;

export const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.s};
    span {
        color: ${(props) => props.theme.colors.coralBlue};
    }
`;

export const emptyRepos = styled(Icon)`
    font-size: ${(props) => props.theme.font.size.header.xl};
    margin-top: ${(props) => props.theme.margin.m};
    color: ${(props) => props.theme.colors.coralBlue};
`;
