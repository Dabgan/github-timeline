import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    setUsername,
    updateRepos,
    setNextPageFlag,
    setRepoLink,
} from "../../redux";
import axios from "axios";
import * as styled from "./mainPage.styles";
import Button from "../../components/Button";

const MainPage = () => {
    const history = useHistory();
    const [name, setName] = useState("dabgan");
    const dispatch = useDispatch();

    const getRepositories = (username) => {
        const config = {
            method: "get",
            url: `https://api.github.com/users/${username}`,
        };

        axios(config)
            .then((res) => {
                const repos = res.data.repos_url;
                dispatch(setRepoLink(repos));
                return repos;
            })
            .then((res) => {
                axios(res).then((res) => {
                    dispatch(updateRepos(res.data));
                    dispatch(setNextPageFlag(res.headers.link ? true : false));
                });
            })
            .catch((error) => console.log(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUsername(name));
        getRepositories(name);
        history.push("/repos", {});
    };

    return (
        <styled.MainContainer onSubmit={(e) => handleSubmit(e)}>
            <styled.Title>Github timeline</styled.Title>
            <styled.Container>
                <styled.Label htmlFor="username">
                    Enter github username:
                </styled.Label>
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
