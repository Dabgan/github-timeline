import styled from "styled-components";

export const Repo = styled.div`
    width: 33%;
    padding: ${(props) => props.theme.padding.xs};
`;

export const RepoInfo = styled.div`
    display: flex;
    flex-flow: column;
    height: 9rem;
    color: inherit;
    text-decoration: none;
    padding: ${(props) => props.theme.padding.s};
    background: ${(props) => props.theme.colors.grey};
    border-radius: ${(props) => props.theme.borderRadius};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.font.size.body.s};
    &:hover {
        div {
            text-decoration: underline;
        }
    }
`;

export const RepoTitle = styled.div`
    display: flex;
    align-items: flex-start;
    word-break: break-word;
    font-size: ${(props) => props.theme.font.size.body.s};
    svg {
        flex: 0 0 20px;
        font-size: ${(props) => props.theme.font.size.body.m};
    }
    span {
        align-self: center;
        margin-left: ${(props) => props.theme.margin.xs};
    }
`;
export const RepoDesc = styled.p`
    margin-top: ${(props) => props.theme.margin.xs};
    font-size: ${(props) => props.theme.font.size.body.xs};
    color: ${(props) => props.theme.font.color.secondary};
    overflow: hidden;
`;
