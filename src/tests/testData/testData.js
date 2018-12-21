import moment from 'moment';

export const expenses = [{
  id: '1',
  description: 'car',
  note: 'bought a car',
  amount: 20000,
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
