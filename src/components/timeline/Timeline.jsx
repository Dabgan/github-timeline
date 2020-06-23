import React from "react";
import TimeItem from "../time item/TimeItem";
import styled from "styled-components";

const TimelineList = styled.ul`
    background: #456990;
    padding: 50px 0;
`;

const Timeline = () => {
    return (
        <TimelineList>
            <TimeItem />
            <TimeItem />
            <TimeItem />
            <TimeItem />
        </TimelineList>
    );
};

export default Timeline;
