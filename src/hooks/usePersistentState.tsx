import { useState, useEffect } from 'react';
/**
 * Works exactly like a React.useState, but the state is saved in localStorage
 * @param id id in localStorage
 * @param initialState optional - default state value - null
 * @returns [state, setState]
 */
export const usePersistentState = <S,>(id: string, initialState: S) => {
  const [state, setState] = useState<typeof initialState>(initialState);

  // update state if localStorage is already set
  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem(id) || 'null');
    if (storedState && state !== storedState) setState(storedState);
  }, []);

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(state));
  }, [state]);

  return [state, setState] as const;
};
