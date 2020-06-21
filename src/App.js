import React from "react";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/global.styles";

function App() {
    return (
        <Theme>
            <GlobalStyle />
            <h1>Github timeline</h1>
        </Theme>
    );
}

export default App;
