import numeral from 'numeral';

export default(expenses) => {

    return expenses
            .map((expense) =>  expense.amount)
            .reduce((accumilated, currentValue) => accumilated+currentValue , 0);
     
};

