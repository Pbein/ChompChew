import { Link, useLocation } from 'react-router-dom';

export const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="grid grid-cols-3 h-16">
        <Link
          to="/"
          className="flex flex-col items-center justify-center"
        >
          <svg
            className={`w-6 h-6 ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className={`mt-1 text-xs ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-400'}`}>
            Explore
          </span>
        </Link>

        <Link
          to="/saved"
          className="flex flex-col items-center justify-center"
        >
          <svg
            className={`w-6 h-6 ${location.pathname === '/saved' ? 'text-blue-600' : 'text-gray-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className={`mt-1 text-xs ${location.pathname === '/saved' ? 'text-blue-600' : 'text-gray-400'}`}>
            Saved
          </span>
        </Link>

        <Link
          to="/preferences"
          className="flex flex-col items-center justify-center"
        >
          <svg
            className={`w-6 h-6 ${location.pathname === '/preferences' ? 'text-blue-600' : 'text-gray-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <span className={`mt-1 text-xs ${location.pathname === '/preferences' ? 'text-blue-600' : 'text-gray-400'}`}>
            Diet
          </span>
        </Link>
      </div>
    </nav>
  );
}; 