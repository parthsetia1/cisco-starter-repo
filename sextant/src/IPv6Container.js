import React from 'react';
import PublicIPDisplay from './PublicIPDisplay';

const IPv6Container = () => {
    return (
      <div>
        <h2>IPv6 Address</h2>
        <PublicIPDisplay ipType={6} />
      </div>
    );
  };

  export default IPv6Container;