import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 880px;
    border: 2px solid #069cc8;
    padding: ${(props) => props.theme.padding.m};
`;

export const Repo = styled.div`
    display: flex;
    flex-flow: column;
    width: 14.91rem;
    color: inherit;
    text-decoration: none;
    font-size: ${(props) => props.theme.font.size.body.s};
    background: ${(props) => props.theme.colors.powderWhite};
    border: 2px solid #2ce90a;
    margin: ${(props) => props.theme.margin.xs};
    padding: ${(props) => props.theme.padding.m};
    word-break: break-word;
    cursor: pointer;
`;
