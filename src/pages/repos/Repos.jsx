import React from "react";
import * as styled from "./repos.styles";
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "../../styles/global.styles";
import { updateCommits } from "../../redux";
import { Link } from "react-router-dom";
import axios from "axios";
import formatDate from "../../formatDate";

const Repos = () => {
    const repos = useSelector((state) => state.repos.repos);
    const username = useSelector((state) => state.username.username);
    const dispatch = useDispatch();

    console.log(
        "Repos site, those are repos:",
        repos,
        "and username",
        username
    );

    const getCommits = (repo) => {
        const config = {
            method: "get",
            url: `https://api.github.com/repos/${username}/${repo}/commits`,
        };

        axios(config)
            .then((res) => {
                console.log(res.data);
                let resCommits = [];
                // get and logout every commit on page
                // const links = parse(res.headers.link);
                for (let i = 0; i < res.data.length; i++) {
                    const date = new Date(res.data[i].commit.committer.date);
                    resCommits.push({
                        message: res.data[i].commit.message,
                        date: formatDate(date),
                    });
                }
                dispatch(updateCommits(resCommits));
                // go to next page and do the same
                // axios(links.next)
                //     .then((res) => {
                //         for (let i = 0; i < res.data.length; i++) {
                //             // console.log(res.data[i].commit.message);
                //             resCommits.push(res.data[i].commit.message);
                //         }
                //         console.log(resCommits);
                //     })
                //     .catch(() => console.log(`there is no next page`));
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
        </MainContainer>
    );
};

export default Repos;
