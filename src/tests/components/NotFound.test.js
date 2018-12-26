import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../components/NotFound';

test('should render NotFound page', () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper.find('Link')).toHaveLength(1);
});