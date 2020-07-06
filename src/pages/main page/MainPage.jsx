import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsername, fetchRepos } from "../../redux";
import * as styled from "./mainPage.styles";
import Button from "../../components/Button";

const MainPage = () => {
    const history = useHistory();
    const [name, setName] = useState("gabriel");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUsername(name));
        dispatch(fetchRepos(name));
        history.push("/repos");
    };

    return (
        <styled.MainContainer>
            <styled.Container onSubmit={(e) => handleSubmit(e)}>
                <styled.Title>Github timeline</styled.Title>
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

                <Button submit>Show commits</Button>
            </styled.Container>
        </styled.MainContainer>
    );
};

export default MainPage;
