import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./main page/MainPage";
import Timeline from "./timeline/Timeline";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="/timeline" exact>
                <Timeline />
            </Route>
        </Switch>
    );
};

export default Routes;
