import React from 'react';
import { shallow } from 'enzyme';
import { GuessCount } from './guess-count';

describe('<GuessCount />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should render the guess count', () => {
        let count = 3;
        const wrapper = shallow(<GuessCount guessCount={count} />);
        let textCount = wrapper.find('span').text();
        expect(textCount).toEqual(count.toString());
    })
})