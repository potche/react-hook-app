import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = (): JSX.Element => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value: number) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
