// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Enzyme from "enzyme";
import { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

React.useLayoutEffect = React.useEffect;
Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

global.shallow = shallow;
global.mount = mount;
global.render = render;
