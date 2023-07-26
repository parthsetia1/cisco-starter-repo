import React from 'react';
import PublicIPDisplay from './PublicIPDisplay';

const IPv4Container = () => {
  return (
    <div>
      <h2>IPv4 Address</h2>
      <PublicIPDisplay ipType={4} />
    </div>
  );
};



export default IPv4Container;