import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import * as styled from "./mainPage.styles";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, updateCommits, updateRepos } from "../../redux";
import axios from "axios";
import formatDate from "../../formatDate";

const MainPage = () => {
    // const username = useSelector((state) => state.username.username);
    const [name, setName] = useState("dabgan");
    const dispatch = useDispatch();

    const getGithubApiCommits = (username) => {
        const config = {
            method: "get",
            url: `https://api.github.com/users/${username}`,
        };

        axios(config)
            .then((res) => {
                let resCommits = [];
                const repos = res.data.repos_url;
                return repos;
                // get and logout every commit on page
                // const links = parse(res.headers.link);
                // for (let i = 0; i < res.data.length; i++) {
                //     const date = new Date(res.data[i].commit.committer.date);
                //     resCommits.push({
                //         message: res.data[i].commit.message,
                //         date: formatDate(date),
                //     });
                // }
                // dispatch(updateCommits(resCommits));
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
            .then((res) => {
                axios(res).then((res) => {
                    dispatch(updateRepos(res.data));
                });
            })
            .catch((error) => console.log(error));
    };

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUsername(name));
        getGithubApiCommits(name);
        history.push("/repos", {});
    };

    return (
        <styled.MainContainer onSubmit={(e) => handleSubmit(e)}>
            <styled.Title>Github timeline</styled.Title>
            <styled.Container>
                <styled.Label htmlFor="username">Github username</styled.Label>
                <styled.Input
                    required
                    id="username"
                    name="username"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </styled.Container>
            <Button submit>Show commits</Button>
        </styled.MainContainer>
    );
};

export default MainPage;
