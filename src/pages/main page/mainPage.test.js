import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import MainPage from "./MainPage";
import Theme from "../../styles/Theme";

const mockStore = configureStore();

describe("Render main page without errors", () => {
    let store;
    let wrapper;

    beforeAll(() => {
        store = mockStore({
            repos: {
                error: "",
            },
        });
        wrapper = global
            .shallow(
                <Provider store={store}>
                    <Theme>
                        <MainPage />
                    </Theme>
                </Provider>
            )
            .render();
    });

    it("Renders without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
