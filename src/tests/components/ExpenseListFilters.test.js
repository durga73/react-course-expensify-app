import React from 'react';
import { shallow } from 'enzyme';
import  { ExpenseListFilters }  from '../../component/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters = {filters}
            setTextFilter={setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />);
});
test('Should render Expense List filters', ()=> {
    expect(wrapper).toMatchSnapshot();
})

test('Should render Expense List filters with alt data', ()=> {
    wrapper.setProps({
        filters:altFilters
    });
    expect(wrapper).toMatchSnapshot();
})
test('Should handle text change', ()=> {
    const value = 'Coffee';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})
test('Should handle sortby date', ()=> {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
})
test('Should handle sort by amount', ()=> {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
})

test('Should handle date change', ()=> {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate, endDate
    })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('Should handle date focus change', ()=> {
    const calanderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calanderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calanderFocused);
})