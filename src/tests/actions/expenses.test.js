import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, startEditExpense,
    removeExpense, startRemoveExpense, 
    setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);
const uid = 'adasdasdasdasd';
const defaultAuthState = {auth: {uid}}

beforeEach ((done)=> {
    const expensesData = {};
    expenses.forEach(({id, description, amount, note, createdAt})=> {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref(`Users/${uid}/expenses`).set(expensesData)
    .then(() => done())
    .catch((e)=> {
        console.log("Error: ",e);
    });
});

test( 'should setup remove expense action object ', () => {

    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    })

});

test('Should remove expese from firebase', (done)=> {
    const store = createMockStore({auth: {uid}});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense( {id })).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`Users/${uid}/expenses/${id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toBeFalsy();
            done();
        })
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

test('Should edit expese from firebase', (done)=> {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21045}
    store.dispatch(startEditExpense( id, updates )).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`Users/${uid}/expenses/${id}`).once('value').then((snapshot)=>{
            expect(snapshot.val().amount).toBe(updaes.amount);
            done();
        })
    })

});


test( 'shoud setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database store', (done)=> {
    const store = createMockStore(defaultAuthState);
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
        database.ref(`Users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot)=> {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
        
    })
})

test('Should add expense with defaults to database store', ()=> {
    const store = createMockStore(defaultAuthState);
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
        database.ref(`Users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot)=> {
            expect(snapshot.val()).toEqual(expenseDataDefault);
            done();
        })
        
    })
    
})
test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('Should fetch expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done();
    })
})