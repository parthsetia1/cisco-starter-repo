import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PublicIPDisplay = ({ ipType }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get(`https://api.ipify.org?format=json&ipv=${ipType}`);
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIPAddress();
  }, [ipType]);

  return <div>Your Public {ipType === 4 ? 'IPv4' : 'IPv6'} Address: {ipAddress}</div>;
};

export default PublicIPDisplay;