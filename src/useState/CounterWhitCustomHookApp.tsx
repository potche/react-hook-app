import { useCounter } from '../hooks/useCounter';

export const CounterWhitCustomHookApp = () => {
  const { counter, decrement, increment, reset } = useCounter(1);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
    </>
  );
};
