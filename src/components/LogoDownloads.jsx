import React from 'react';
import vestaWordmark from '../assets/vesta_wordmark.svg';
import vestaWordmarkMono from '../assets/vesta_wordmark_mono.svg';
import vestaWordmarkMonoInverse from '../assets/vesta_wordmark_mono_inverse.svg';
import vestaLogo from '../assets/vesta_logo.svg';
import vestaLogoMono from '../assets/vesta_logo_mono.svg';
import vestaLogoMonoInverse from '../assets/vesta_logo_mono_inverse.svg';
import { DownloadButton } from './DownloadButton';

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

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Download Assets</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Wordmark Package</h4>
          <p className="text-sm text-gray-600 mb-3">Includes full color, monochrome, and inverse wordmark variations</p>
          <DownloadButton files={wordmarkLogos} zipName="vesta-wordmarks.zip">
            Download Wordmarks (ZIP)
          </DownloadButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Logo Package</h4>
          <p className="text-sm text-gray-600 mb-3">Includes full color, monochrome, and inverse logo variations</p>
          <DownloadButton files={symbolLogos} zipName="vesta-logos.zip">
            Download Logos (ZIP)
          </DownloadButton>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="text-sm font-medium mb-2">Complete Asset Package</h4>
        <p className="text-sm text-gray-600 mb-3">Download all Vesta brand assets including wordmarks and logos in all variations</p>
        <DownloadButton
          files={[...wordmarkLogos, ...symbolLogos]}
          zipName="vesta-all-assets.zip"
        >
          Download All Assets (ZIP)
        </DownloadButton>
      </div>
    </div>
  );
}; 