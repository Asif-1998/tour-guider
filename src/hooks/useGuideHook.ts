import { useState } from 'react';

const useGuideHook = (initialState: string) => {
  const [state, setState] = useState(initialState);

  const handleChange = (newValue: string) => {
    setState(newValue);
  };

  return { state, handleChange };
};

export default useGuideHook;