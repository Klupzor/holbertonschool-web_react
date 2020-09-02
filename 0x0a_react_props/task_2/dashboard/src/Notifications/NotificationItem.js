import React from 'react';

const NotificationItem = ({ type, html, value }) => {
    if (!html)
        return (<li data-priority={type}>{value}</li>);
    return (<li data-priority={type} dangerouslySetInnerHTML={html}></li>);
};

export default NotificationItem;