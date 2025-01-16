import React from 'react';

const Typography = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 mb-8">Typography</h2>

        {/* Primary Typefaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Merriweather */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-h3 mb-4 font-serif">Merriweather</h3>
            <p className="text-lead mb-6 text-gray-600">Primary Serif Typeface</p>
            <div className="space-y-4">
              <p className="font-serif font-light">Light (300) - Merriweather Light</p>
              <p className="font-serif font-normal">Regular (400) - Merriweather Regular</p>
              <p className="font-serif font-bold">Bold (700) - Merriweather Bold</p>
              <p className="font-serif font-black">Black (900) - Merriweather Black</p>
            </div>
          </div>

          {/* Merriweather Sans */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-h3 mb-4 font-sans">Merriweather Sans</h3>
            <p className="text-lead mb-6 text-gray-600">Primary Sans-Serif Typeface</p>
            <div className="space-y-4">
              <p className="font-sans font-light">Light (300) - Merriweather Sans Light</p>
              <p className="font-sans font-normal">Regular (400) - Merriweather Sans Regular</p>
              <p className="font-sans font-medium">Medium (500) - Merriweather Sans Medium</p>
              <p className="font-sans font-semibold">Semibold (600) - Merriweather Sans Semibold</p>
              <p className="font-sans font-bold">Bold (700) - Merriweather Sans Bold</p>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-h3 mb-6">Usage Guidelines</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-h4 mb-4">Merriweather (Serif)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use for main headings and important display text</li>
                <li>Ideal for long-form content and body text where readability is crucial</li>
                <li>Regular weight (400) for body text</li>
                <li>Bold weight (700) for emphasis and headings</li>
                <li>Black weight (900) sparingly for impactful headlines</li>
              </ul>
            </div>

            <div>
              <h4 className="text-h4 mb-4">Merriweather Sans</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Primary typeface for user interface elements</li>
                <li>Use for navigation, buttons, and form elements</li>
                <li>Ideal for smaller text sizes and digital interfaces</li>
                <li>Regular weight (400) for general UI text</li>
                <li>Medium (500) and Semibold (600) for subheadings and emphasis</li>
                <li>Bold (700) for strong emphasis and important UI elements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Typography; 