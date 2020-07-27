import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import MainPage from "./MainPage";
import Theme from "../../styles/Theme";
import {
    Input,
    Container,
    MainContainer,
    Title,
    Label,
    ErrorMsg,
} from "./mainPage.styles";
import Button from "../../components/Button";

const mockStore = configureStore();

describe("Render <Main Page/> and all its children", () => {
    let store, wrapper;

    beforeAll(() => {
        store = mockStore({
            repos: {
                error: "",
            },
        });
        wrapper = global.mount(
            <Provider store={store}>
                <Theme>
                    <MainPage />
                </Theme>
            </Provider>
        );
    });

    test("Renders whole page without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("<Main Container/> component exists", () => {
        const mainCtn = wrapper.find(MainContainer);
        expect(mainCtn.length).toBe(1);
    });

    test("<Container/> component exists", () => {
        const ctn = wrapper.find(Container);
        expect(ctn.length).toBe(1);
    });

    test("<Title/> component exists and contain proper title", () => {
        const title = wrapper.find(Title);
        expect(title.exists()).toBe(true);
        expect(title.text()).toMatch(/github timeline/i);
    });

    test("<Label/> component exists and contain proper label", () => {
        const label = wrapper.find(Label);
        expect(label.exists()).toBe(true);
        expect(label.text()).toMatch(/enter github username:/i);
    });

    test("<Input/> component exists", () => {
        const input = wrapper.find(Input);
        expect(input.exists()).toBe(true);
    });

    test("<Button/> component exists", () => {
        const btn = wrapper.find(Button);
        expect(btn.exists()).toBe(true);
    });

    test("<ErrorMsg/> component doesn't exists at the start", () => {
        const errorMsg = wrapper.find(ErrorMsg);
        expect(errorMsg.exists()).toBe(false);
    });
});

describe("Input tests", () => {
    let store, wrapper;

    beforeAll(() => {
        store = mockStore({
            repos: {
                error: "",
            },
        });
        wrapper = global.mount(
            <Provider store={store}>
                <Theme>
                    <MainPage />
                </Theme>
            </Provider>
        );
    });

    test("<Input/> user text is echoed", () => {
        const input = wrapper.find(Input);
        input.simulate("change", { target: { value: "testing" } });
        expect(input.getDOMNode().value).toEqual("testing");
    });

    test("<Input/> should call onChange function when the value change", () => {
        const setNameFn = jest.fn();
        const input = global.mount(
            <Theme>
                <Input onChange={() => setNameFn("new input value")} />
            </Theme>
        );
        input.find("input").simulate("change");
        expect(setNameFn.mock.calls[0][0]).toBe("new input value");
    });

    test('<ErrorMsg/> component is displayed with proper message when user types "error" prop is passed', () => {
        store = mockStore({
            repos: {
                error: "error",
            },
        });
        const component = global.mount(
            <Provider store={store}>
                <Theme>
                    <MainPage />
                </Theme>
            </Provider>
        );
        const errorMsg = component.find(ErrorMsg);
        expect(errorMsg.exists()).toBe(true);
        expect(errorMsg.text()).toMatch(
            /user not found. please try different one./i
        );
    });

    // test("Button submits form after click", () => {
    //     const onSubmitFn = jest.fn();
    //     // const button = wrapper.find(Button);
    //     const formWrapper = global.shallow(
    //         <Theme>
    //             <Container onChange={onSubmitFn} />
    //         </Theme>
    //     );
    //     console.log(formWrapper.debug());
    //     const form = formWrapper.find(Container);
    //     console.log(form.debug());
    //     // button.simulate("click");
    //     form.simulate("submit");
    //     expect(onSubmitFn).toHaveBeenCalledTimes(1);
    // });
});
