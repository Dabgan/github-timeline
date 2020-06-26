import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommitsNextPage } from "../../redux";
import TimeItem from "./time item/TimeItem";
import styled from "styled-components";
import Button from "../../components/Button";

const TimelineList = styled.ul`
    background: #456990;
    padding: 50px 0;
`;

const Timeline = () => {
    const { data, nextPage, link } = useSelector((state) => state.commits);
    const dispatch = useDispatch();

    const getNextPageOfCommits = () => {
        dispatch(fetchCommitsNextPage(data, link));
    };
    return (
        <TimelineList>
            {data.map((commit) => (
                <TimeItem date={commit.date} key={commit.date}>
                    {commit.message}
                </TimeItem>
            ))}
            {nextPage ? (
                <Button onClick={getNextPageOfCommits}>
                    Load more commits
                </Button>
            ) : null}
        </TimelineList>
    );
};

export default Timeline;
