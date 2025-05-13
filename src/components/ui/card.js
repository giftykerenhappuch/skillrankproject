import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white shadow-md rounded p-4 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => <div>{children}</div>;
