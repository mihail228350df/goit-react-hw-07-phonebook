import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      const oldState = JSON.parse(window.localStorage.getItem(key));
      return oldState ?? defaultValue;
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(state);
    window.localStorage.setItem(key, stateJSON);
  }, [state, key]);

  return [state, setState];
};