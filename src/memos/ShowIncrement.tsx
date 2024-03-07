import React from 'react';

export const ShowIncrement = React.memo(
  ({ increment }: { increment: (value: number) => void }) => {
    console.log(' Me volví a generar :( ');

    return (
      <button
        className="btn btn-primary"
        onClick={() => {
          increment(5);
        }}
      >
        Incrementar
      </button>
    );
  }
);
