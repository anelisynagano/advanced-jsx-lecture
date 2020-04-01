import React from 'react';

const Welcome = ({ messages }) => (
    <div>
        <h1>Welcome!</h1>
        {
            messages.length > 0 &&
            <h2>You have {messages.length} messages</h2>
        }
    </div>
);

export default Welcome;