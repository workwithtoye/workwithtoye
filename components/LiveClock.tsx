import React, { useState, useEffect } from 'react';

export const LiveClock: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format for Dublin
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Dublin',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="mono text-[10px] uppercase tracking-widest text-gray-400">
      DUB {time}
    </span>
  );
};