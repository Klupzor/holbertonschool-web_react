import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem'

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
      <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type='urgent' html={{ __html: getLatestNotification() }}/>
      </ul>
      <button
        style={{
          position: 'absolute',
          border: 'none',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent'
        }}
        aria-label='Close'
        onClick={() => {console.log('Close button has been clicked')}}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE6UlEQVR4Xu2aV88dNRBAT+hNPPB/QhUgRA0CQu+htwgEAhIQoSMQvfeS0JtAIET9R4gHegk6sEaXq7u7Htv7RZ++69e1xzPH41l7POtY423dGrefJYClB6xxAsstsMYdYBkES7bAAcB24FDgKeDmXehFuwGPABcDXwJnAj9G9IkC2B/4HFg/M4kQrgJ2RiZu0FfjXwLOm5H1HXAs8FOu/AiA/YDPgEMWCH8WuHwFIWj8K8A5C3T5toPwcw6EXAAa/ylw2IDQF4BLVgDC7sCrwFkDunwDHAeMQsgBsG9n/OEZRF/u9uNfGX1Lumj868AZGYO/Bo4fg5AD4H3g5IwJU5fXgAuA1hD26ILvaQFd3gNOHeqfA+B3wMkj7Q3gfODPyKCBvs7/JnBKUJ7B0MDd23IAGGld0WhTYYNULYQ9gbeCXph0fRq4ohZAieulOd/pgtUfUXpdf41/G9hQMN5YoRcObsUcD3Bug49ufXqBIu5Dg1YUwl6AAE8smNNf5EVjxis3F0CCMPb76dP1Q2AjYDzJaRovOKN4tLllN+UYHwVg/6EDyJiiHwNG8N9GOu4N+OfxRBdtzwOXRs4iEQ9IygjhxW5/RRX0MGUk/7VnoMbrLcdEBQPPdAEvdCQvAZA8QdoXFijqXcKgNg9hH+Aj4OgCmcX3kVIAaft4B3C/RdsXwEnAL91AT5tukSOjgoDHgWsKxv0zpAZAGi/9ywoU8PqaIvwnwBEFMrwKby4Y99+QWgAJwhNjB44eJT2vq0POPWNexEPADTXGt/CA2fkfA66uVShz/APATZl9B7u18IDZCR4Grmuh2ICMe4FbWs3RGoB6PQhc30rBOTl3AVtbyp4CgPrdD9zYUlFgG3B7Y5nVf4Ehfe5pmDDVcAE0b1N5QFL0TmBLpdaOv7tSRu/wqQE48R3AbYUG3AroSZO1qQF4bzBZWpJQ0Whvdub8Q+f7CK0pASjbS1Op8ckOZXjcngTCVACU68qXXJYWLeBkKfcpACjTm6IZmZZtEgitAUxlfAIZTniMrUBLAMp6rgtaY/PWfHcOb59NYkIrAMopzQ2UwGj2FtkCgDJMR/kuGG0+pdlK/hRFKbB5BWsB1BifUtfqVJpj9OHjyprtUAPAsSpgFjbaTK/7i0yPFove+nNlmpESQlErBeC40lRY3+OpENwS5xZYUgyhBIBjnuwKIqK6jr0c10BQJytVQi0KoMZ4n9YsZxl7Nq95fDE3GUrLRQFIefC1tQe/RVW69pjxabgQjBNnh5bz386hNHkEQKnxOzrjo8/kQnDLDJXC9PExQXttDrxcAKXG19YI+CotBMvfou3RnARtDoD7ClPQFjXowtGVnzc0Uhc0P3Y0iZoD4AfgwCB+ixp03Vrj07SlEL4HDhrSPQfAB8EKDYsadNlWxs9CiBZpqIt1Cb0tB0BOjWCa4N3O+Gg1SK6D6Qn+UQaN6oR9BZzQokxOeUNVokn50lKYXONnPcE/y1C5XFaNoAJzPCBNbLmZpbIHL9DYig7rh6Za+fkpLdwSwqIawOwq0SgA+y8qljZG6JIrZXyCsah2cNJi6TSx5fK6+1HdfvRWl1v8FHX3sf5CMFdoPaKVJ26L7ErxEg+YVcgavl1l+DwYT425x+z/jY3EgLHVWJXflwBW5bI1VHrpAQ1hrkpRSw9YlcvWUOm/Aa812kErBGjPAAAAAElFTkSuQmCC"
          style={{ height: '15px'}}
          alt='Close'
        />
      </button>
    </div>
  );
}

export default Notifications;
