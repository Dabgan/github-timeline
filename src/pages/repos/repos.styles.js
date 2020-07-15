import styled from "styled-components";
import { Icon } from "@iconify/react";
import InfiniteScroll from "react-infinite-scroll-component";

export const Container = styled(InfiniteScroll)`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    width: 68rem;
    margin-top: ${(props) => props.theme.margin.s};
    overflow: auto;
    @media ${(props) => props.theme.device.tablet} {
        width: 100%;
        height: 49rem !important;
    }
    @media ${(props) => props.theme.device.phone} {
        flex-flow: column no-wrap;
        width: 100%;
        height: 30rem !important;
    }
    @media ${(props) => props.theme.device.smallPhone} {
        height: 22.5rem !important;
        margin-top: ${(props) => props.theme.margin.xs};
    }
`;

export const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.s};
    line-height: ${(props) => props.theme.font.size.header.s};
    margin-bottom: ${(props) => props.theme.margin.s};
    text-align: center;
    span {
        color: ${(props) => props.theme.colors.coralBlue};
    }
    @media ${(props) => props.theme.device.phone} {
        font-size: ${(props) => props.theme.font.size.header.xs};
        margin-bottom: ${(props) => props.theme.margin.xs};
    }
`;

export const emptyRepos = styled(Icon)`
    font-size: ${(props) => props.theme.font.size.header.xl};
    margin-top: ${(props) => props.theme.margin.m};
    color: ${(props) => props.theme.colors.coralBlue};
    @media ${(props) => props.theme.device.phone} {
        margin-top: ${(props) => props.theme.margin.s};
    }
`;
