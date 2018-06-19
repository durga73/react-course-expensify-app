import { startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test( 'should setup remove expense action object ', () => {

    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    })

});

test ('should setup edit expense action object', () => {

    const action = editExpense('123abc', { 'note': 'newNoteValue'});
    expect(action).toEqual({
        id: '123abc',
        type: 'EDIT_EXPENSE',
        updates: {note: 'newNoteValue'}
    })

})

test( 'shoud setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database store', (done)=> {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount:3000,
        note: 'This one is better',
        createdAt:1000

    };
    store.dispatch(startAddExpense(expenseData)).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=> {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
        
    })
})

test('Should add expense with defaults to database store', ()=> {
    const store = createMockStore({});
    const expenseDataDefault = {
        description: '',
        amount:0,
        note: '',
        createdAt:0

    };
    store.dispatch(startAddExpense({})).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDataDefault
            }
        });
        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=> {
            expect(snapshot.val()).toEqual(expenseDataDefault);
            done();
        })
        
    })
    
})
// test( 'shoud setup add expense action object with default values', () => {
//     const defaultExpenseData = {
//         description:'', 
//         note:'', 
//         amount:0, 
//         createdAt:0
//     }
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...defaultExpenseData,
//             id: expect.any(String)
//         }
//     })
// })