import React from 'react';

export const LogoDownloads = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Download Assets</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Wordmark</h4>
          <p className="text-sm text-gray-600 mb-3">Full color, monochrome, and inverse wordmark variations</p>
          <a
            href="/vesta-wordmark-assets.zip"
            download
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Download Wordmark
          </a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Logo</h4>
          <p className="text-sm text-gray-600 mb-3">Full color, monochrome, and inverse logo variations</p>
          <a
            href="/vesta-logo-assets.zip"
            download
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Download Logo
          </a>
        </div>
      </div>
    </div>
  );
}; 