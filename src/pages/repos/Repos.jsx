import React from "react";
import * as styled from "./repos.styles";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/global.styles";
import { Link } from "react-router-dom";

const Repos = () => {
    const repos = useSelector((state) => state.repos.repos);
    const username = useSelector((state) => state.username.username);
    console.log(repos);

    return (
        <MainContainer>
            <h1>Here are repositories of user {username}.</h1>
            <p>Click one to see commits timeline!</p>
            <styled.Container>
                {repos.map((repo) => (
                    <styled.Repo as={Link} to="/timeline">
                        <p>Repository name: </p>
                        {repo.name}
                    </styled.Repo>
                ))}
            </styled.Container>
        </MainContainer>
    );
};

export default Repos;
