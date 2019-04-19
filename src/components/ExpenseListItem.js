import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({id, description, amount, createdAt}) => {
  return (
    <Fragment>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>
      <p>{numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('Do MMMM, YYYY')}</p>
    </Fragment>
  );
};

// using connect() without args passes dispatch as a prop to the connected component - Not too sure about htis
export default ExpenseListItem;