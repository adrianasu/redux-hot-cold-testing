import React from 'react';
import { GuessList } from './guess-list';
import { shallow } from 'enzyme';

describe('<GuessList />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    })

    it('Should render as many lis as guesses', () => {
        let guesses = [1, 2, 3];
        const wrapper = shallow(<GuessList guesses={guesses} />);
        let lis = wrapper.find('li');
        expect(lis.length).toEqual(guesses.length);
        guesses.forEach((guess, index) => {
            expect(lis.at(index).text()).toEqual(guess.toString());
        })
    })
})