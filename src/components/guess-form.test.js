import React from 'react';
import { shallow, mount } from 'enzyme';
import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';

describe('<GuessForm />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessForm />);
    }); 

    it('Should dispatch makeGuess when the form is submitted', () => {
        let guess = '10';
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        wrapper.find('input[type="number"]').instance().value = guess;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
    });

    it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm dispatch={() => {}} />);
        let input = wrapper.find('input[type="number"]');
        input.instance().value = '10';
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });

})