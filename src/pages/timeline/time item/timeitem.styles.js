import styled from "styled-components";

export const ItemContainer = styled.li`
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-top: 2.5rem;
    background: ${(props) => props.theme.colors.grey};
    &:hover {
        time {
            text-decoration: underline;
        }
    }
    ::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: inherit;
    }
    :nth-child(odd) div {
        left: 45px;
        ::before {
            left: -16px;
            border-width: 8px 16px 8px 0;
            border-color: transparent ${(props) => props.theme.colors.secondary}
                transparent transparent;
        }
    }
    :nth-child(even) div {
        left: -439px;
        ::before {
            right: -16px;
            border-width: 8px 0 8px 16px;
            border-color: transparent transparent transparent
                ${(props) => props.theme.colors.secondary};
        }
    }
`;

export const Item = styled.div`
    position: relative;
    bottom: 0;
    width: 400px;
    padding: 15px;
    font-size: ${(props) => props.theme.font.size.body.s};
    background: #f45b69;
    word-break: break-word;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.font.color.secondary};
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.font.size.body.xs};
    ::before {
        content: "";
        position: absolute;
        bottom: 7px;
        width: 0;
        height: 0;
        border-style: solid;
    }
`;

export const Time = styled.time`
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${(props) => props.theme.font.color.main};
    font-size: ${(props) => props.theme.font.size.body.s};
`;
