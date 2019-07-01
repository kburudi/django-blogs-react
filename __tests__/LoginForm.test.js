import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import LoginForm from "../src/components/users/forms/LoginForm";

Enzyme.configure({ adapter: new Adapter() })

describe("<App /> root component", () => {
    test("renders without crashing", () => {
        expect(shallow(<LoginForm />)).toMatchSnapshot();
    });
});