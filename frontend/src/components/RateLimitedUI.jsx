import React from 'react';
import { AlertTriangle } from 'lucide-react';

const RateLimitedUI = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full text-center border border-red-100">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-red-500 w-12 h-12 animate-pulse" />
        </div>
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          Rate Limit Exceeded
        </h2>
        <p className="text-gray-600 mb-4">
          You've made too many requests in a short time. Please wait before trying again.
        </p>
        <div className="bg-red-50 text-red-700 py-2 px-4 rounded-md text-sm font-medium">
          Try again in <span className="font-bold">30 seconds</span>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
