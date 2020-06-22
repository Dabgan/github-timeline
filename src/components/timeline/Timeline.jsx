import React from "react";
import { useSelector } from "react-redux";
import TimeItem from "../time item/TimeItem";
import styled from "styled-components";

const TimelineList = styled.ul`
    background: #456990;
    padding: 50px 0;
`;

const Timeline = () => {
    const commits = useSelector((state) => state.commits.commits);

    console.log(commits);

    return (
        <TimelineList>
            {commits.map((commit) => (
                <TimeItem key={commit}>{commit}</TimeItem>
            ))}
        </TimelineList>
    );
};

export default Timeline;
