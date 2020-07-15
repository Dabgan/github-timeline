import styled from "styled-components";

export const ItemContainer = styled.li`
    /* Vertical line */
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-top: 2.5rem;
    background: ${(props) => props.theme.colors.grey};
    @media ${(props) => props.theme.device.tablet} {
        padding-top: 1.5rem;
    }
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
        @media ${(props) => props.theme.device.phone} {
            content: none;
        }
    }
    :nth-child(odd) div {
        left: 45px;
        ::before {
            left: -16px;
            border-width: 8px 16px 8px 0;
            border-color: transparent ${(props) => props.theme.colors.secondary}
                transparent transparent;
        }
        @media ${(props) => props.theme.device.tablet} {
            left: 2.5rem;
        }
        @media ${(props) => props.theme.device.phone} {
            left: -8rem;
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
        @media ${(props) => props.theme.device.tablet} {
            left: -22rem;
        }
        @media ${(props) => props.theme.device.phone} {
            left: -8rem;
        }
    }
`;

export const Item = styled.div`
    position: relative;
    bottom: 0;
    width: 25rem;
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
        @media ${(props) => props.theme.device.phone} {
            content: none;
        }
    }
    @media ${(props) => props.theme.device.tablet} {
        width: 20rem;
    }
    @media ${(props) => props.theme.device.phone} {
        width: 16rem;
    }
`;

export const Time = styled.time`
    display: block;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${(props) => props.theme.font.color.main};
    font-size: ${(props) => props.theme.font.size.body.s};
    @media ${(props) => props.theme.device.tablet} {
        font-size: 0.9rem !important;
    }
    @media ${(props) => props.theme.device.phone} {
        font-size: 0.7rem !important;
    }
`;
