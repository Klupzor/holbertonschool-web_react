import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

test('renders a div with the class App-body', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('#app_body')).toHaveClassName('App-body');
  });