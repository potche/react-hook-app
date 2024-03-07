import { useEffect, useState } from 'react';

type Data = { author: string; quote: string };
type Resp = {
  data: Data[] | null;
  isLoading: boolean;
  hasError: string | null;
};

export const useFetch = (url: string) => {
  console.log({ url });
  const [state, setState] = useState<Resp>({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });
    const resp = await fetch(url);
    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
    console.log({ state });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
