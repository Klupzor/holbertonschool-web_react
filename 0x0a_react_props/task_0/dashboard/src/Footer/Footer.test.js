import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

test('renders a div with the class App-footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).toHaveClassName('App-footer');
  });