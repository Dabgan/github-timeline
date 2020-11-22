import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "../../styles/global.styles";
import { fetchReposNextPage, fetchCommits } from "../../redux";
// components
import Loader from "../../components/Loader";
import RepoTile from "./repo tile/RepoTile";
// styles and icons
import * as styled from "./repos.styles";
import databaseError from "@iconify/icons-si-glyph/database-error";
import { Icon } from "@iconify/react";

const Repos = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.username.username);
    const { data, nextPage, link, loading, loadingNextPage } = useSelector(
        (state) => state.repos
    );

    // function that sort repositories at start, based on a creation date (newest repos, at the top)
    const sortedRepos = data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });

    const getCommits = (repo) => {
        dispatch(fetchCommits(username, repo));
    };

    const getNextPageOfRepos = () => {
        dispatch(fetchReposNextPage(link, data));
    };

    return (
        <MainContainer loading={loading ? 1 : 0}>
            {/* Show loader when data loads, when it's finish, show repos or empty panel */}
            {loading ? (
                <Loader loading={loading ? 1 : 0} size={10} />
            ) : (
                <>
                    {/* Show all the repos or empty information */}
                    {data.length ? (
                        <>
                            <styled.Title>
                                Here are repositories of user{" "}
                                <span>{username}</span>.
                            </styled.Title>
                            <p>Click one to see commits timeline!</p>
                            <styled.Container // aka Infinity scroller (check in repos.styles.js)
                                dataLength={data.length}
                                next={getNextPageOfRepos}
                                height={"31.5rem"}
                                hasMore={nextPage}
                                scrollThreshold={0.99}
                                loader={
                                    <Loader
                                        loading={loadingNextPage ? 1 : 0}
                                        size={6}
                                    />
                                }
                            >
                                {sortedRepos.map((repo) => (
                                    <RepoTile
                                        key={repo.id}
                                        data={repo}
                                        getCommits={getCommits}
                                    />
                                ))}
                            </styled.Container>
                        </>
                    ) : (
                        // Empty repos information
                        <>
                            <styled.Title>
                                It looks like{" "}
                                <span>{username ? username : "this user"}</span>{" "}
                                doesn't have any repositories.
                            </styled.Title>
                            <styled.SubTitle>
                                Maybe try other users?
                            </styled.SubTitle>
                            <styled.emptyRepos to="/">
                                <Icon icon={databaseError} />
                            </styled.emptyRepos>
                        </>
                    )}
                </>
            )}
        </MainContainer>
    );
};

export default Repos;
