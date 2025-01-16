import React from 'react';

const BrandGuidelines = () => {
  const LogoUsage = ({ backgroundColor = "white", color = "#2C2C2C", inverted = false }) => (
    <div
      className="p-8 rounded-lg mb-4"
      style={{ backgroundColor }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2232 1232"
        className="w-full h-auto"
      >
        <path d="M281 855L264 852V838H297C302 838 308 838 316 837C318 837 320 837 323 837C326 837 329 837 332 837C354 837 370 840 379 846C388 852 392 861 392 874C392 885 389 894 382 901C376 908 367 913 357 914C371 914 382 917 391 924C399 931 403 940 403 952C403 968 398 980 387 989C376 998 359 1003 333 1003C327 1003 321 1003 315 1002C314 1002 311 1002 308 1002C304 1002 301 1002 297 1002H264V988L281 986V855Z" fill={inverted ? "white" : color} />
      </svg>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="space-y-12">
        {/* Brand Values */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Brand Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="font-medium mb-2">Affordable Luxury</h3>
              <p className="text-sm text-gray-600">Premium quality and experience without unnecessary costs</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="font-medium mb-2">Trustworthy Partnership</h3>
              <p className="text-sm text-gray-600">Building lasting relationships through transparency and reliability</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h3 className="font-medium mb-2">Approachable Excellence</h3>
              <p className="text-sm text-gray-600">Maintaining high standards while remaining accessible and welcoming</p>
            </div>
          </div>
        </section>

        {/* Logo Usage */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Logo Usage</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-4">Primary Logo - Light Background</h3>
              <LogoUsage />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Clear Space</h4>
                  <p className="text-sm text-gray-600">Maintain minimum clear space equal to the height of the 'e' in the wordmark around all sides of the logo.</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium mb-2">Minimum Size</h4>
                  <p className="text-sm text-gray-600">Digital: 100px width | Print: 1 inch width</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-4">Logo Variations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Dark Background</h4>
                  <LogoUsage backgroundColor="#2C3844" inverted={true} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Monochrome</h4>
                  <LogoUsage color="#000000" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Color System</h2>

          <div>
            <h3 className="text-lg mb-4">Primary Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-24 rounded-lg" style={{ backgroundColor: '#2C3844' }}></div>
                <div>
                  <p className="font-medium">Slate 900</p>
                  <p className="text-sm text-gray-600">Primary Text</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-24 rounded-lg" style={{ backgroundColor: '#7F92A7' }}></div>
                <div>
                  <p className="font-medium">Slate 600</p>
                  <p className="text-sm text-gray-600">Brand Accent</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Color Combinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="mb-4">
                  <h4 className="text-sm font-medium" style={{ color: '#2C3844' }}>Primary Headers</h4>
                  <p className="text-sm" style={{ color: '#536478' }}>Body text using Slate 700 on light background.</p>
                </div>
                <div className="text-xs text-gray-500">
                  Background: Slate 200<br />
                  Header: Slate 900<br />
                  Body: Slate 700
                </div>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#2C3844' }}>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white">Inverted Headers</h4>
                  <p className="text-sm" style={{ color: '#CBD5E0' }}>Body text using Slate 400 on dark background.</p>
                </div>
                <div className="text-xs" style={{ color: '#A5B3C4' }}>
                  Background: Slate 900<br />
                  Header: White<br />
                  Body: Slate 400
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Usage Guidelines</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg mb-2">Do's</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the primary logo on light backgrounds when possible</li>
                <li>Maintain clear space around the logo</li>
                <li>Use approved color combinations for maximum legibility</li>
                <li>Scale the logo proportionally</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-2">Don'ts</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Don't modify the logo colors outside of approved variations</li>
                <li>Don't stretch or distort the logo</li>
                <li>Don't use the logo smaller than minimum size</li>
                <li>Don't place the logo on busy backgrounds without proper contrast</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandGuidelines; 