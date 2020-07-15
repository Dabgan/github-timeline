import styled from "styled-components";
import { BtnContainer } from "../../styles/global.styles";

const TimelineList = styled.ul`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding: 7rem 0;
    background: ${(props) => props.theme.colors.grey};
    @media ${(props) => props.theme.device.tablet} {
        background: none;
        padding: 0;
        min-height: auto;
    }
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.s};
    text-align: center;
    @media ${(props) => props.theme.device.tablet} {
        margin-top: ${(props) => props.theme.margin.s};
    }
    @media ${(props) => props.theme.device.phone} {
        margin-top: ${(props) => props.theme.margin.xs};
        font-size: ${(props) => props.theme.font.size.header.xs};
    }
`;

const EndMessage = styled(BtnContainer)`
    font-size: ${(props) => props.theme.font.size.header.xs};
    text-align: center;
    @media ${(props) => props.theme.device.tablet} {
        margin-top: ${(props) => props.theme.margin.s};
    }
    @media ${(props) => props.theme.device.phone} {
        margin-top: ${(props) => props.theme.margin.xs};
        font-size: ${(props) => props.theme.font.size.body.s};
    }
`;

export { TimelineList, Title, EndMessage };
