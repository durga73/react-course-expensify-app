import  { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';
import moment from 'moment';
test ( 'should generate set start date action object', ()=> {

        const action = setStartDate(moment(0));
        expect(action).toEqual({
            type: 'SET_START_DATE',
            startDate: moment(0)
        })
})

test ( 'should generate set end date action object', ()=> {

    const action = setEndDate(moment(0));
        expect(action).toEqual({
            type: 'SET_END_DATE',
            endDate: moment(0)
        })

})

test ( 'shoud generate set text filter action object', ()=> {
    const action = setTextFilter('Coffee');
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: 'Coffee'
        })
 })

test ( 'shoud generate sortByDate action object', ()=> {
    const action = sortByDate(moment(0));
        expect(action).toEqual({
            type: 'SORT_BY_DATE'
        })
 })

test ( 'shoud generate sortByAmount action object', ()=> {
    const action = sortByAmount();
        expect(action).toEqual({
            type: 'SORT_BY_AMOUNT'
        })
 })

test ( 'shoud generate set text filter default action object', ()=> {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})