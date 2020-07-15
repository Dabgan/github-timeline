import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCommitsNextPage } from "../../redux";
// components
import Loader from "../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import TimeItem from "./time item/TimeItem";
// styles
import * as styled from "./timeline.styles";
import { MainContainer } from "../../styles/global.styles";

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
                <MainContainer loading={loading ? 1 : 0}>
                    <Loader loading={loading ? 1 : 0} size={10} />
                </MainContainer>
            ) : (
                <InfiniteScroll
                    dataLength={data.length}
                    next={getNextPageOfCommits}
                    hasMore={nextPage}
                    scrollThreshold={0.99}
                    loader={
                        <Loader loading={loadingNextPage ? 1 : 0} size={6} />
                    }
                    endMessage={
                        <styled.EndMessage>
                            <p>
                                That's it! You've reached the beginning of this
                                repository :)
                            </p>
                        </styled.EndMessage>
                    }
                >
                    <styled.TimelineList>
                        <styled.Title>Commits timeline</styled.Title>
                        {data.map((commit) => (
                            <TimeItem date={commit.date} key={commit.id}>
                                {commit.message}
                            </TimeItem>
                        ))}
                    </styled.TimelineList>
                </InfiniteScroll>
            )}
        </>
    );
};

export default Timeline;
