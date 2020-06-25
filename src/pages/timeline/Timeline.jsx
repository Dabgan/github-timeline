import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    updateCommits,
    setNextPageFlagCommits,
    setCommitsLink,
} from "../../redux";
import TimeItem from "./time item/TimeItem";
import styled from "styled-components";
import Button from "../../components/Button";
import axios from "axios";
import parse from "parse-link-header";
import formatDate from "../../formatDate";

const TimelineList = styled.ul`
    background: #456990;
    padding: 50px 0;
`;

const Timeline = () => {
    const { commits, nextPage, link } = useSelector((state) => state.commits);

    const dispatch = useDispatch();

    const getCommitsNextPage = () => {
        axios(link)
            .then((res) => {
                // update list of commits
                let resCommits = [];
                for (let i = 0; i < res.data.length; i++) {
                    const date = new Date(res.data[i].commit.committer.date);
                    resCommits.push({
                        message: res.data[i].commit.message,
                        date: formatDate(date),
                    });
                }
                dispatch(updateCommits([...commits, ...resCommits]));
                return res;
            })
            .then((res) => {
                // if there is link to the next page, show button
                const links = parse(res.headers.link);
                const nextLink = links.next ? links.next.url : false;
                dispatch(setCommitsLink(nextLink ? nextLink : link));
                dispatch(setNextPageFlagCommits(nextLink ? true : false));
            })
            .catch((error) => console.log(error));
    };

    return (
        <TimelineList>
            {commits.map((commit) => (
                <TimeItem date={commit.date} key={commit.date}>
                    {commit.message}
                </TimeItem>
            ))}
            {nextPage ? (
                <Button onClick={getCommitsNextPage}>Load more commits</Button>
            ) : null}
        </TimelineList>
    );
};

export default Timeline;
