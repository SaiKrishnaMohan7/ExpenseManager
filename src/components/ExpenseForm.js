import React from 'react';

export default class ExpenseForm extends React.Component{
  state = {
    description: ''
  };

  onDescriptionChange = (e) => {
    const description = e.target.currentValue;

    this.setState(() => ({ description }));
  };

  render () {
    return (
      <div>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        
        <input
          type="number"
          placeholder="Amount"
        />

        <textarea 
          placeholder="Add Some notes (optional)"
        />

        <button>Add Expense</button>
      </div>
    );
  }
}