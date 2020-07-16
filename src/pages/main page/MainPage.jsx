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

    const handleSubmit = (e) => {
        e.preventDefault();
        // stopPropagation prevents errors when clicking enter on input with LastPass extension installed
        e.stopPropagation();
        dispatch(setUsername(name));
        dispatch(fetchRepos(name, history));
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
                {error ? (
                    <styled.ErrorMsg>
                        User not found. Please try different one.
                    </styled.ErrorMsg>
                ) : null}
                <Button submit>Show commits</Button>
            </styled.Container>
        </styled.MainContainer>
    );
};

export default MainPage;
