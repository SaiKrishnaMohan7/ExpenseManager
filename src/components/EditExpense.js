import React from 'react';

const EditExpense = (props) => {
    // url is dynamic and the dynamic can be accessed via props.match.params and key-value obj
    return (
        <p>Editing Expense {props.match.params.id}</p>
    );
};

export default EditExpense;