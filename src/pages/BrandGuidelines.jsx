import React from 'react';
import { BrandValues } from '../sections/BrandValues';
import { LogoSection } from '../sections/LogoSection';
import { ColorSystem } from '../sections/ColorSystem';
import Typography from '../sections/Typography';

export const BrandGuidelines = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="space-y-12">
        <BrandValues />
        <LogoSection />
        <ColorSystem />
        <Typography />
      </div>
    </div>
  );
};

export default BrandGuidelines; 