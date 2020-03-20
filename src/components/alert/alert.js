import React from 'react';

export default function Alert({ color, text }) {
  return (
    <div class={`alert alert-${color}`} role="alert">
      {text}
    </div>
  );
}
