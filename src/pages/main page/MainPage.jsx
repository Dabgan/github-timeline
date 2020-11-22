import React, { useState } from "react";
// redux
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUsername, fetchRepos } from "../../redux";
// components / styles
import * as styled from "./mainPage.styles";
import Button from "../../components/Button";

const MainPage = () => {
    const history = useHistory();
    const { error } = useSelector((state) => state.repos);
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const dispatchUser = (user) => {
        dispatch(setUsername(user));
        dispatch(fetchRepos(user, history));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // stopPropagation prevents errors when clicking enter on input with LastPass extension installed
        e.stopPropagation();
        name === "" ? dispatchUser("dabgan") : dispatchUser(name);
    };

    return (
        <styled.MainContainer>
            <styled.Container onSubmit={(e) => handleSubmit(e)}>
                <styled.Title>Github timeline</styled.Title>
                <styled.Label htmlFor="username">
                    Enter github username:
                </styled.Label>
                <styled.Input
                    id="username"
                    name="username"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="dabgan"
                />
                {error ? (
                    <styled.ErrorMsg>
                        User not found. Please try different one.
                    </styled.ErrorMsg>
                ) : null}
                <Button submit>Show repos</Button>
            </styled.Container>
        </styled.MainContainer>
    );
};

export default MainPage;
