import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../component/ExpensesSummary';

test('Should correctly render Expenses Summary with 1 expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1500}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Should correctly render Expenses Summary with multiple expenses', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={61500}/>);
    expect(wrapper).toMatchSnapshot();
})