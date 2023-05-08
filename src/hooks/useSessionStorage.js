import { useState, useEffect } from 'react';

const useSessionStorage = (initialValue, key) => {
  const getValue = () => {
    const storage = sessionStorage.getItem(key); //string||null

    if (storage !== 'undefined' && storage !== null) {
      return JSON.parse(storage);
    }
    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useSessionStorage;
