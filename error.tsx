'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="max-w-md w-full text-center p-8">
        <div className="mb-8">
          <h1 className="text-6xl font-display font-bold text-obsession-primary mb-4">
            Oops!
          </h1>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
            Something went wrong
          </h2>
          <p className="text-neutral-600">
            We're sorry for the inconvenience. Please try again.
          </p>
        </div>

        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Try Again
        </button>

        <a
          href="/"
          className="block mt-4 text-obsession-secondary hover:text-obsession-accent transition-colors"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
}
