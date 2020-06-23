import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/global.styles";

import Routes from "./pages/Routes";

function App() {
    return (
        <Router>
            <Theme>
                <GlobalStyle />
                <Routes />
            </Theme>
        </Router>
    );
}

export default App;
