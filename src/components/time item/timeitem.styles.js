import styled from "styled-components";

export const ItemContainer = styled.li`
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-top: 50px;
    background: #fff;
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
            left: -15px;
            border-width: 8px 16px 8px 0;
            border-color: transparent #f45b69 transparent transparent;
        }
    }
    :nth-child(even) div {
        left: -439px;
        ::before {
            right: -15px;
            border-width: 8px 0 8px 16px;
            border-color: transparent transparent transparent #f45b69;
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
`;
