import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component
 {
     state = {
        calenderFocused: null
     };
     onDatesChange = ({ startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
     };

     onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
     };
    onSortChange = (e) => {

        if(e.target.value === "amount") {
            this.props.sortByAmount();
        }else if(e.target.value === "date") {
            this.props.sortByDate();
        }
        
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

     render() {
         return (
            <div>
                <input 
                    type='text' 
                    defaultValue={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value="date"> Date </option>
                    <option value='amount'> Amount</option>
                </select>
                <DateRangePicker
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calenderFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths = { 1 }
                    isOutsideRange = { (day )=> false }
                />
            </div>
         );
     }
 };

const mapStateToProps = (state) => ({
       filters: state.filters
});

const mapDispatchToProps = (dispatch, props) => ({
    setTextFiter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps)(ExpenseListFilters);