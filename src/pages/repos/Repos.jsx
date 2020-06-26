import React from "react";
import * as styled from "./repos.styles";
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "../../styles/global.styles";
import { fetchReposNextPage, fetchCommits } from "../../redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

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
            <h1>Here are repositories of user {username}.</h1>
            <p>Click one to see commits timeline!</p>
            <styled.Container>
                {data.map((repo) => (
                    <styled.Repo
                        as={Link}
                        to="/timeline"
                        key={repo.id}
                        onClick={() => getCommits(repo.name)}
                    >
                        <p>Repository name: </p>
                        {repo.name}
                    </styled.Repo>
                ))}
            </styled.Container>
            {nextPage ? (
                <Button onClick={getNextPageOfRepos}>Next page</Button>
            ) : null}
        </MainContainer>
    );
};

export default Repos;
