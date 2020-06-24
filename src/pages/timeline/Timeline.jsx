import React from "react";
import { useSelector } from "react-redux";
import TimeItem from "./time item/TimeItem";
import styled from "styled-components";

const TimelineList = styled.ul`
    background: #456990;
    padding: 50px 0;
`;

const Timeline = () => {
    const commits = useSelector((state) => state.commits.commits);

    return (
        <TimelineList>
            {commits.map((commit) => (
                <TimeItem date={commit.date} key={commit.date}>
                    {commit.message}
                </TimeItem>
            ))}
        </TimelineList>
    );
};

export default Timeline;
