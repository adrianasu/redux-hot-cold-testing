import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';
import { generateAuralUpdate, restartGame, RESTART_GAME, GENERATE_AURAL_UPDATE } from '../actions';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Dispatches restartGame', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalled();
        const action = dispatch.mock.calls[0][0]; // first arg of first call
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
    });

    it('Dispatches generateAuralUpdate', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch} />);
        const link = wrapper.find('.status-link');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalled();
        const action = dispatch.mock.calls[0][0];
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    })
})