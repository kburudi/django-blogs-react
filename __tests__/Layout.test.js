import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Layout from "../src/hoc/Layout";

Enzyme.configure({ adapter: new Adapter() })

describe("<App /> root component", () => {
    test("renders without crashing", () => {
        expect(shallow(<Layout />)).toMatchSnapshot();
    });
});