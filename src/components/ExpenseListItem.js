import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => {
  return (
    <Fragment>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      <p>{amount} - {createdAt}</p>
    </Fragment>
  );
};

// using connect() without args passes dispatch as a prop to the connected component - Not too sure about htis
export default ExpenseListItem;