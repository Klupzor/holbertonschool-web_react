import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  test('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header')).toHaveClassName('App-header');
  });

  test('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#app_body')).toHaveClassName('App-body');
  });

  test('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('footer')).toHaveClassName('App-footer');
  });
});