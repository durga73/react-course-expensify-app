import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import numeral from 'numeral';

test('Should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
})

test('Should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(1500)
})

test('Should correctly add multipl expense', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(61500)
})