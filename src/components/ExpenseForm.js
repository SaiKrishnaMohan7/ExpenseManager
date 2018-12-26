import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      amount: props.expense ? props.expense.amount.toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      description: props.expense ? props.expense.description : '',
      focused: false,
      error: '',
      note: props.expense ? props.expense.note : ''
    };
  }

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

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState({
        createdAt: createdAt
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState({ focused: focused });
  };

  onSubmit = (e) => {
    const { amount, description, createdAt, note } = this.state;
    e.preventDefault();
    if (!(amount && description)) {
      this.setState({ error: 'Both amount and description are required' });
    } else {
      const { onSubmit } = this.props;

      this.setState({ error: '' });
      onSubmit({
        amount: parseFloat(amount, 10),
        createdAt: createdAt.valueOf(),
        description,
        note 
      });
    }
  }

  render () {
    const {
      amount,
      createdAt,
      description,
      error,
      focused,
      note
    }  = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
            value={note}
            onChange={this.onNoteChange}
          />

          <button>Add Expense</button>
        </form>
        {error && (<p>{error}</p>)}
      </div>
    );
  }
}