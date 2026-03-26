import React from 'react';
import vestaWordmark from '../assets/vesta_wordmark.svg';
import vestaWordmarkMono from '../assets/vesta_wordmark_mono.svg';
import vestaWordmarkMonoInverse from '../assets/vesta_wordmark_mono_inverse.svg';
import vestaLogo from '../assets/vesta_logo.svg';
import vestaLogoMono from '../assets/vesta_logo_mono.svg';
import vestaLogoMonoInverse from '../assets/vesta_logo_mono_inverse.svg';
import { LogoDownloads } from '../components/LogoDownloads';

export const LogoUsage = () => {
  return (
    <div className="space-y-12">
      {/* Wordmark Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Wordmark</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Full Color */}
          <div className="p-8 rounded-lg bg-white border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Full Color Wordmark</h3>
            <img src={vestaWordmark} alt="Vesta Wordmark (Full Color)" className="w-full h-auto" />
          </div>

          {/* Monochrome on Light */}
          <div className="p-8 rounded-lg bg-white border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Monochrome Wordmark on Light</h3>
            <img src={vestaWordmarkMono} alt="Vesta Wordmark (Monochrome)" className="w-full h-auto" />
          </div>

          {/* Monochrome on Dark */}
          <div className="p-8 rounded-lg bg-black">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Monochrome Wordmark on Dark</h3>
            <img src={vestaWordmarkMonoInverse} alt="Vesta Wordmark (Monochrome Inverse)" className="w-full h-auto" />
          </div>
        </div>

        {/* Wordmark Size Specifications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-h4 mb-4 text-primary">Size Specifications</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-h5 mb-2">Minimum Sizes</h5>
              <ul className="list-disc pl-5 space-y-2 text-body">
                <li>Digital: 100px width</li>
                <li>Print: 1 inch width</li>
              </ul>
            </div>
            <div>
              <h5 className="text-h5 mb-2">Clear Space Guide</h5>
              <ul className="list-disc pl-5 space-y-2 text-body">
                <li>Base height: Standard wordmark is 40px tall</li>
                <li>'e' height: 12px at standard size</li>
                <li>Clear space: 12px on all sides (1 'e' height)</li>
                <li>Scale proportionally for other sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Logo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Full Color */}
          <div className="p-8 rounded-lg bg-white border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Full Color Logo</h3>
            <img src={vestaLogo} alt="Vesta Logo (Full Color)" className="w-full h-auto max-w-[200px] mx-auto" />
          </div>

          {/* Monochrome on Light */}
          <div className="p-8 rounded-lg bg-white border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Monochrome Logo on Light</h3>
            <img src={vestaLogoMono} alt="Vesta Logo (Monochrome)" className="w-full h-auto max-w-[200px] mx-auto" />
          </div>

          {/* Monochrome on Dark */}
          <div className="p-8 rounded-lg bg-black">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Monochrome Logo on Dark</h3>
            <img src={vestaLogoMonoInverse} alt="Vesta Logo (Monochrome Inverse)" className="w-full h-auto max-w-[200px] mx-auto" />
          </div>
        </div>

        {/* Logo Size Specifications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-h4 mb-4 text-primary">Size Specifications</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-h5 mb-2">Minimum Sizes</h5>
              <ul className="list-disc pl-5 space-y-2 text-body">
                <li>Digital: 48px height</li>
                <li>Print: 0.5 inch height</li>
              </ul>
            </div>
            <div>
              <h5 className="text-h5 mb-2">Clear Space Guide</h5>
              <ul className="list-disc pl-5 space-y-2 text-body">
                <li>Base height: Standard logo is 48px tall</li>
                <li>Triangle height: 16px at standard size</li>
                <li>Clear space: 16px on all sides (1 triangle height)</li>
                <li>Scale proportionally for other sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <LogoDownloads />
      </div>
    </div>
  );
}; 