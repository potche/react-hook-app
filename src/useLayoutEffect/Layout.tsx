import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../examples';

export const Layout = () => {
  console.log('Layout');
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  let author = '';
  let quote = '';
  if (data) {
    author = data[0].author;
    quote = data[0].quote;
  }
  //const { author, quote } = data;
  console.log({ hasError });
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
