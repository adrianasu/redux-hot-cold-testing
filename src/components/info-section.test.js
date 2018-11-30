import React from 'react';
import InfoSection from './info-section';
import {shallow} from 'enzyme';

describe('<InfoSection />', () => {
    it('Should render without crashing', () => {
        shallow(<InfoSection />);
    })
})