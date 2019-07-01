import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import SignupForm from "../src/components/users/forms/SignupForm";

Enzyme.configure({ adapter: new Adapter() })

describe("<App /> root component", () => {
    test("renders without crashing", () => {
        expect(shallow(<SignupForm />)).toMatchSnapshot();
    });
});