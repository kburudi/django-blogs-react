import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import App from "../src/containers/App";

Enzyme.configure({ adapter: new Adapter() })

describe("<App /> root component", () => {
    test("renders without crashing", () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });

    test("renders <Navbar /> component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("Connect(Navbar)")).toHaveLength(1);
    });
});