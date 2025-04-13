import { Link, useLocation } from 'react-router-dom';

export const BottomNav = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/"
          className="flex flex-col items-center flex-1 pt-2 pb-1"
        >
          <svg
            className={`w-6 h-6 ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className={`text-xs mt-1 ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`}>
            Search
          </span>
        </Link>

        <Link
          to="/saved"
          className="flex flex-col items-center flex-1 pt-2 pb-1"
        >
          <svg
            className={`w-6 h-6 ${location.pathname === '/saved' ? 'text-blue-600' : 'text-gray-500'}`}
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
          <span className={`text-xs mt-1 ${location.pathname === '/saved' ? 'text-blue-600' : 'text-gray-500'}`}>
            Saved
          </span>
        </Link>

        <Link
          to="/preferences"
          className="flex flex-col items-center flex-1 pt-2 pb-1"
        >
          <svg
            className={`w-6 h-6 ${location.pathname === '/preferences' ? 'text-blue-600' : 'text-gray-500'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className={`text-xs mt-1 ${location.pathname === '/preferences' ? 'text-blue-600' : 'text-gray-500'}`}>
            Preferences
          </span>
        </Link>
      </div>
    </div>
  );
}; 