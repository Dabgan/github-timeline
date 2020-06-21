import React from "react";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/global.styles";
import useGetGitHubApiData from "./hooks/useGetGitHubApiData";

function App() {
    useGetGitHubApiData();

    return (
        <Theme>
            <GlobalStyle />
            <h1>Github timeline</h1>
        </Theme>
    );
}

export default App;
