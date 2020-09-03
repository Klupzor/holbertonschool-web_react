import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
    const wrapper = shallow(<Notifications />);
    test('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
    test('renders three list items', () => {
        const items = wrapper.find('NotificationItem')
        expect(items).toHaveLength(3);
    });
    test('renders the text', () => {
        expect(wrapper.find('p')).toHaveText('Here is the list of notifications');
    });
});
