import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommitsNextPage } from "../../redux";
import TimeItem from "./time item/TimeItem";
import { MainContainer, BtnContainer } from "../../styles/global.styles";
import styled from "styled-components";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

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

export const Title = styled.h1`
    font-size: ${(props) => props.theme.font.size.header.s};
    text-align: center;
`;

const Timeline = () => {
    const { data, nextPage, link, loading, loadingNextPage } = useSelector(
        (state) => state.commits
    );
    const dispatch = useDispatch();

    const getNextPageOfCommits = () => {
        dispatch(fetchCommitsNextPage(data, link));
    };
    return (
        <>
            {loading ? (
                <MainContainer>
                    <Loader loading={loading ? 1 : 0} size={10} />
                </MainContainer>
            ) : (
                <TimelineList>
                    <Title>Commits timeline</Title>
                    {data.map((commit) => (
                        <TimeItem date={commit.date} key={commit.date}>
                            {commit.message}
                        </TimeItem>
                    ))}

                    <BtnContainer style={{ marginTop: "5rem" }}>
                        {nextPage ? (
                            <>
                                {loadingNextPage ? (
                                    <Loader
                                        loading={loadingNextPage ? 1 : 0}
                                        size={3}
                                    />
                                ) : (
                                    <Button onClick={getNextPageOfCommits}>
                                        Load more commits
                                    </Button>
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                    </BtnContainer>
                </TimelineList>
            )}
        </>
    );
};

export default Timeline;
