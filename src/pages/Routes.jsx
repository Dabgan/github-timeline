import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./main page/MainPage";
import Timeline from "./timeline/Timeline";
import Repos from "./repos/Repos";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="/repos" exact>
                <Repos />
            </Route>
            <Route path="/timeline" exact>
                <Timeline />
            </Route>
        </Switch>
    );
};

export default Routes;
