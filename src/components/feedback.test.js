import React from 'react';
import { shallow } from 'enzyme';
import { Feedback } from './feedback';

describe('<Feedback />', () => {
    it('Should render without crashing', () => {
        shallow(<Feedback />);
    });

    it('Should render some feedback', () => {
        let feedback = 'Hooray!';
        const wrapper = shallow(<Feedback feedback={feedback} guessCount={1} />);
        expect(wrapper.text()).toEqual('Hooray! Guess again!');
    })
})