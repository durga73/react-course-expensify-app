import moment from 'moment';

export default  [ {
    id: '1',
    description: 'GUM',
    note: '',
    amount: 1500,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 15000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 45000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]