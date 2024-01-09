import { useState, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

export const useAsyncStore = (store,callback) => {
  const result = store(callback , shallow) ;
  const [data, setData] = useState(); 

  useEffect(() => {
    console.log(result)
    setData(result);
  }, [result]);

  return data;
};