import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
        const state = filtersReducers(undefined, {type: '@@INIT'});
        expect(state).toEqual({
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        })
});

test('should set sort by to date', ()=>{
    const state = filtersReducers(undefined, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');

})

test('should set sort by to amount', ()=>{
    const currentState ={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducers(currentState, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');

})

test('should set text filter value', ()=>{
    const currentState ={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducers(currentState, {type:'SET_TEXT_FILTER', text:'Coffe'});
    expect(state.text).toBe('Coffe');
})

test('should set start date filter value', ()=>{
    const currentState ={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducers(currentState, {type:'SET_START_DATE', startDate:moment(0).add(2, 'days')});
    expect(state.startDate).toEqual(moment(0).add(2, 'days'));
})

test('should set end filter value', ()=>{

    const endDate = moment(0).subtract(2, 'days');
    const currentState ={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducers(currentState, {type:'SET_END_DATE', endDate:moment(0).subtract(2, 'days')});
    expect(state.endDate).toEqual(endDate);
})