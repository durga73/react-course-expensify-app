import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../component/ExpenseList';
import expenses from '../fixtures/expenses';

test('Should render the expense list itmes', ()=> {

        const wrapper = shallow(<ExpenseList expenses={expenses}/>);
        expect(wrapper).toMatchSnapshot();
});

test('should render with expense list with empty items', ()=> {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});