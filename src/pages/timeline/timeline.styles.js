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
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.s};
    text-align: center;
`;

const InfinityLoaderStyles = {
    paddingBottom: "3rem",
};

const EndMessage = styled(BtnContainer)`
    font-size: ${(props) => props.theme.font.size.header.xs};
`;

export { TimelineList, Title, InfinityLoaderStyles, EndMessage };
