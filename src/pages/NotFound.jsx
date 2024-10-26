import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import trackPageView from '../utils/tracking';

export default function Notfound() {
  
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;
    trackPageView( pagePath, "404 - Page Not Found");
}, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
    <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">Page Not Found</p>
        <Link to="/" className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out">
        Go Home
        </Link>
    </div>
</div>
  )
}
