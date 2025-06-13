// src/components/AccessCounter.tsx
import React, { useState, useEffect } from 'react';

interface Props {
  text?: (count: number) => React.ReactNode;
}

const defaultText = (count: number) => (
  <p className="text-lg text-gray-700 dark:text-gray-300
                border-b-2 border-gray-300 dark:border-gray-600
                pb-2 inline-block">
    you are the <strong className="font-bold text-xl mx-1">
      {count.toLocaleString()}
    </strong> th visitor!
  </p>
);

export default function AccessCounter({ text }: Props) {
  const [count, setCount]   = useState<number | null>(null);
  const [error, setError]   = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/counter/increment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('[AccessCounter] fetch status:', res.status);
        if (!res.ok) throw new Error(`STATUS ${res.status}`);
        const json = await res.json();
        console.log('[AccessCounter] fetch json:', json);
        setCount(json.count);
      } catch (e: any) {
        console.error('[AccessCounter] fetch error:', e);
      }
    })();
  }, []);

  const renderText = text || defaultText;
  return (
    <div className="text-center">
      {error   && <p className="text-red-500 font-semibold">{error}</p>}
      {count   != null ? renderText(count) : <p></p>}
    </div>
  );
}
