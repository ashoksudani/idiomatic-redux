import React from 'react';

export default ({ error, onRetry }) => (
  <div>
    <p>Could not fetch todos. {error}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);
