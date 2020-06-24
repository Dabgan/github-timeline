import React from "react";
import * as styled from "./repos.styles";
import { useSelector } from "react-redux";

const Repos = () => {
    const repos = useSelector((state) => state.repos.repos);
    console.log(repos);

    return (
        <div>
            <h1>hey here are your repos, pick one:</h1>
            {repos.map((repo) => (
                <styled.Repo>{repo.name}</styled.Repo>
            ))}
        </div>
    );
};

export default Repos;
