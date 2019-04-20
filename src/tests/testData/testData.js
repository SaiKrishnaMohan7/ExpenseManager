import moment from 'moment';

export const expenses = [{
  id: '1',
  description: 'car',
  note: 'bought a car',
  amount: 2000000,
  createdAt: 0 ,
},
{
  id: '2',
  description: 'coffee',
  note: '',
  amount: 5,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
},
{
  id: '3',
  description: 'Rent',
  note: '',
  amount: 587,
  createdAt: moment(0).add(4, 'days').valueOf(),
}];

export const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export const testFiltersDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

export const testFilters = {
  text: 'bought',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3),
};
