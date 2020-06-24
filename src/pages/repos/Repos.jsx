import React from "react";
import * as styled from "./repos.styles";
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "../../styles/global.styles";
import {
    updateRepos,
    updateCommits,
    setNextPageFlag,
    setRepoLink,
} from "../../redux";
import { Link } from "react-router-dom";
import axios from "axios";
import formatDate from "../../formatDate";
import Button from "../../components/Button";
import parse from "parse-link-header";

const Repos = () => {
    const { repos, nextPage, link } = useSelector((state) => state.repos);
    const username = useSelector((state) => state.username.username);
    const dispatch = useDispatch();

    console.log("How many times it will be rendered?");

    const getCommits = (repo) => {
        const config = {
            method: "get",
            url: `https://api.github.com/repos/${username}/${repo}/commits`,
        };

        axios(config)
            .then((res) => {
                let resCommits = [];
                // get and logout every commit on page
                for (let i = 0; i < res.data.length; i++) {
                    const date = new Date(res.data[i].commit.committer.date);
                    resCommits.push({
                        message: res.data[i].commit.message,
                        date: formatDate(date),
                    });
                }
                dispatch(updateCommits(resCommits));
            })
            .catch((error) => console.log(error));
    };

    const getCommitsNextPage = () => {
        axios(link)
            .then((res) => {
                // get link to the next page of repos
                const links = parse(res.headers.link);
                const nextLink = links.next.url;
                dispatch(setRepoLink(nextLink));
                return nextLink;
            })
            .then((resLink) => {
                axios(resLink)
                    .then((res) => {
                        // update list of repositories
                        const newRepos = [...repos, ...res.data];
                        dispatch(updateRepos(newRepos));
                        // if there is link to the next page, show button
                        const links = parse(res.headers.link);
                        dispatch(setNextPageFlag(links.next ? true : false));
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    return (
        <MainContainer>
            <h1>Here are repositories of user {username}.</h1>
            <p>Click one to see commits timeline!</p>
            <styled.Container>
                {repos.map((repo) => (
                    <styled.Repo
                        as={Link}
                        to="/timeline"
                        key={repo.id}
                        onClick={() => {
                            getCommits(repo.name);
                        }}
                    >
                        <p>Repository name: </p>
                        {repo.name}
                    </styled.Repo>
                ))}
            </styled.Container>
            {nextPage ? (
                <Button onClick={getCommitsNextPage}>Next page</Button>
            ) : null}
        </MainContainer>
    );
};

export default Repos;
