import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component{
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    focused: false
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;

    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;

    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    this.setState({
      createdAt: createdAt
    });
  };

  onFocusChange = ({ focused }) => {
    this.setState({ focused: focused });
  };

  render () {
    const {
      amount,
      createdAt,
      description,
      focused,
      value
    }  = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => (false)}
          />

          <textarea 
            placeholder="Add Some notes (optional)"
            value={value}
            onChange={this.onNoteChange}
          />

          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}