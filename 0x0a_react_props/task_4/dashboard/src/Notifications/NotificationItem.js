import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
    if (!html)
        return (<li data-priority={type}>{value}</li>);
    return (<li data-priority={type} dangerouslySetInnerHTML={html}></li>);
};

NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string
  };
  
  NotificationItem.defaultProps = {
    type: 'default',
    value: ''
  };

export default NotificationItem;