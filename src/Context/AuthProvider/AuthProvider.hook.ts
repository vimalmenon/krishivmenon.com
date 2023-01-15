import React from 'react';

export const useLocalStorage = () => {
  React.useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('KM') || '{}'));
  }, []);
};
