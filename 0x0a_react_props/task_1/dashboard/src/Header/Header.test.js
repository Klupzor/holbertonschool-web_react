import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

test('renders a div with the class App-header', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('header')).toHaveClassName('App-header');
});

test('renders an image and h1', () => {
  const wrapper = shallow(<Header />);

  const image = wrapper.find('img');
  const h1 = wrapper.find('h1');

  expect(image.exists()).toBe(true);
  expect(h1.exists()).toBe(true);
});