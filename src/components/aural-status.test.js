import React from 'react';
import { shallow } from 'enzyme';
import { AuralStatus } from './aural-status';

describe('<AuralStatus />', () => {
    it('Should render without crashing', () => {
        shallow(<AuralStatus />);
    })

    it('Should render an aural status', () => {
        let status = 'You won!';
        const wrapper = shallow(<AuralStatus auralStatus={status}/>);
        expect(wrapper.text()).toEqual(status);
    })
})