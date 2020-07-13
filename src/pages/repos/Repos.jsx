import React from "react";
import * as styled from "./repos.styles";
import { useSelector, useDispatch } from "react-redux";
import { MainContainer, BtnContainer } from "../../styles/global.styles";
import { fetchReposNextPage, fetchCommits } from "../../redux";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import databaseError from "@iconify/icons-si-glyph/database-error";
import RepoTile from "./repo tile/RepoTile";

const Repos = () => {
    const username = useSelector((state) => state.username.username);
    const dispatch = useDispatch();
    const { data, nextPage, link, loading, loadingNextPage } = useSelector(
        (state) => state.repos
    );
    console.log("How many times it will be rendered?");

    // sort repositories at start, based on creation date (newest, at the top)
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
        <MainContainer>
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
                            <styled.Container>
                                {sortedRepos.map((repo) => (
                                    <RepoTile
                                        key={repo.id}
                                        data={repo}
                                        getCommits={getCommits}
                                    />
                                ))}
                            </styled.Container>
                            <BtnContainer>
                                {nextPage ? (
                                    <>
                                        {loadingNextPage ? (
                                            <Loader
                                                loading={
                                                    loadingNextPage ? 1 : 0
                                                }
                                                size={3}
                                            />
                                        ) : (
                                            <Button
                                                onClick={getNextPageOfRepos}
                                            >
                                                Next Page
                                            </Button>
                                        )}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </BtnContainer>
                        </>
                    ) : (
                        // Empty repos information
                        <>
                            <styled.Title>
                                It looks like <span>{username}</span> doesn't
                                have any repositories.
                            </styled.Title>
                            Maybe try other users?
                            <styled.emptyRepos icon={databaseError} />
                        </>
                    )}
                </>
            )}
        </MainContainer>
    );
};

export default Repos;
