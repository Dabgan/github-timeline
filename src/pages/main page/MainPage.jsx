import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername, fetchRepos } from "../../redux";
import * as styled from "./mainPage.styles";
import Button from "../../components/Button";

const MainPage = () => {
    const history = useHistory();
    const [name, setName] = useState("dabgan");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUsername(name));
        dispatch(fetchRepos(name));
        history.push("/repos");
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
