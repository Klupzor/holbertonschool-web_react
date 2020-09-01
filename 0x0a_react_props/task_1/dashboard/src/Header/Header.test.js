import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

  test('renders a div with the class App-header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveClassName('App-header');
  });
