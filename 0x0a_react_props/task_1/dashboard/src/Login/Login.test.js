import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

test('renders a div with the class App-body', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('#app_body')).toHaveClassName('App-body');
});


test('renders two input tags', () => {
  const wrapper = shallow(<Login />);

  const inputs = wrapper.find('input');
  const labels = wrapper.find('label');

  expect(inputs.length).toBe(2);
  expect(labels.length).toBe(2);
});