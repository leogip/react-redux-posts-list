import React from 'react';

export default ({ alert }) => (
  <div className={`alert alert-${alert.color}`} role="alert">
    {alert.text}
  </div>
);
