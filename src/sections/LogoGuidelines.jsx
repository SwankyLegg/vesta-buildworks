import React from 'react';
import { LogoUsage } from './LogoUsage';

export const LogoGuidelines = () => (
  <div className="space-y-6">
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
            <li>Base height: Standard logo is 40px tall</li>
            <li>'e' height: 12px at standard size</li>
            <li>Clear space: 12px on all sides (1 'e' height)</li>
            <li>Scale proportionally for other sizes</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 className="text-h3">Logo Guidelines</h3>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-h4 mb-4 text-primary">Do's</h4>
        <ul className="list-disc pl-5 space-y-2 text-body">
          <li>Use the primary logo on light backgrounds when possible</li>
          <li>Maintain clear space around the logo</li>
          <li>Use approved color combinations</li>
          <li>Scale the logo proportionally</li>
          <li>Use official logo files (SVG, PNG, EPS)</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-h4 mb-4 text-primary">Don'ts</h4>
        <ul className="list-disc pl-5 space-y-2 text-body">
          <li>Don't modify the logo colors outside approved variations</li>
          <li>Don't stretch or distort the logo</li>
          <li>Don't use the logo smaller than minimum size</li>
          <li>Don't place the logo on busy backgrounds</li>
          <li>Don't recreate or modify the logo artwork</li>
        </ul>
      </div>
    </div>
  </div>
); 