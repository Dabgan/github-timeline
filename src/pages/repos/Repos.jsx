import React from "react";
import * as styled from "./repos.styles";
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "../../styles/global.styles";
import { fetchReposNextPage, fetchCommits } from "../../redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { Icon } from "@iconify/react";
import repoIcon from "@iconify/icons-octicon/repo";

const Repos = () => {
    const { data, nextPage, link } = useSelector((state) => state.repos);
    const username = useSelector((state) => state.username.username);
    const dispatch = useDispatch();

    console.log("How many times it will be rendered?");

    const getCommits = (repo) => {
        dispatch(fetchCommits(username, repo));
    };

    const getNextPageOfRepos = () => {
        dispatch(fetchReposNextPage(link, data));
    };

    return (
        <MainContainer>
            <styled.Title>
                Here are repositories of user {username}.
            </styled.Title>
            <p>Click one to see commits timeline!</p>
            <styled.Container>
                {data.map((repo) => (
                    <styled.Repo key={repo.id}>
                        <styled.RepoInfo
                            as={Link}
                            to="/timeline"
                            onClick={() => getCommits(repo.name)}
                        >
                            <styled.RepoTitle>
                                <Icon icon={repoIcon} />
                                <span>{repo.name}</span>
                            </styled.RepoTitle>
                            <styled.RepoDesc>
                                {repo.description}
                            </styled.RepoDesc>
                        </styled.RepoInfo>
                    </styled.Repo>
                ))}
                {nextPage ? (
                    <Button onClick={getNextPageOfRepos}>Next page</Button>
                ) : null}
            </styled.Container>
        </MainContainer>
    );
};

export default Repos;
