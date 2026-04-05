import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-obsession">
      <div className="max-w-md w-full text-center p-8 text-white">
        <h1 className="text-9xl font-display font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-white/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-secondary bg-white text-obsession-primary hover:bg-neutral-100"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
