import React from 'react';
import { LogoUsage } from './LogoUsage';
import { LogoGuidelines } from './LogoGuidelines';

export const LogoSection = () => (
  <section className="space-y-6">
    <h2 className="text-h2">Logo</h2>
    <div className="space-y-8">
      <LogoUsage />
      <LogoGuidelines />
    </div>
  </section>
); 