import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import vestaWordmark from '../assets/vesta_wordmark.svg';
import vestaWordmarkMono from '../assets/vesta_wordmark_mono.svg';
import vestaWordmarkMonoInverse from '../assets/vesta_wordmark_mono_inverse.svg';
import vestaLogo from '../assets/vesta_logo.svg';
import vestaLogoMono from '../assets/vesta_logo_mono.svg';
import vestaLogoMonoInverse from '../assets/vesta_logo_mono_inverse.svg';

export const LogoDownloads = () => {
  const wordmarkLogos = [
    { name: 'vesta_wordmark.svg', url: vestaWordmark },
    { name: 'vesta_wordmark_mono.svg', url: vestaWordmarkMono },
    { name: 'vesta_wordmark_mono_inverse.svg', url: vestaWordmarkMonoInverse },
  ];

  const symbolLogos = [
    { name: 'vesta_logo.svg', url: vestaLogo },
    { name: 'vesta_logo_mono.svg', url: vestaLogoMono },
    { name: 'vesta_logo_mono_inverse.svg', url: vestaLogoMonoInverse },
  ];

  const downloadZip = async (files, zipName) => {
    try {
      const zip = new JSZip();

      for (const file of files) {
        const response = await fetch(file.url);
        const blob = await response.blob();
        zip.file(file.name, blob);
      }

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, zipName);
    } catch (error) {
      console.error('Error creating zip file:', error);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Download Assets</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Wordmark Package</h4>
          <p className="text-sm text-gray-600 mb-3">Includes full color, monochrome, and inverse wordmark variations</p>
          <button
            onClick={() => downloadZip(wordmarkLogos, 'vesta-wordmarks.zip')}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Wordmarks (ZIP)
          </button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Logo Package</h4>
          <p className="text-sm text-gray-600 mb-3">Includes full color, monochrome, and inverse logo variations</p>
          <button
            onClick={() => downloadZip(symbolLogos, 'vesta-logos.zip')}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Logos (ZIP)
          </button>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="text-sm font-medium mb-2">Complete Asset Package</h4>
        <p className="text-sm text-gray-600 mb-3">Download all Vesta brand assets including wordmarks and logos in all variations</p>
        <button
          onClick={() => downloadZip([...wordmarkLogos, ...symbolLogos], 'vesta-all-assets.zip')}
          className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Download All Assets (ZIP)
        </button>
      </div>
    </div>
  );
}; 