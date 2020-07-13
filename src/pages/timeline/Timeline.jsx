import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommitsNextPage } from "../../redux";
import TimeItem from "./time item/TimeItem";
import { MainContainer } from "../../styles/global.styles";
import Loader from "../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import * as styled from "./timeline.styles";

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
                <InfiniteScroll
                    dataLength={data.length}
                    next={getNextPageOfCommits}
                    style={styled.InfinityLoaderStyles}
                    hasMore={nextPage}
                    scrollThreshold={0.99}
                    loader={
                        <Loader loading={loadingNextPage ? 1 : 0} size={8} />
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
