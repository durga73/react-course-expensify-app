import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../component/LoadingPage';

test('SHould correctly render laodingpage', ()=> {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
})