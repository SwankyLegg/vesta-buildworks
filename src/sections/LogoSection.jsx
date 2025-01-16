import React from 'react';
import { LogoUsage } from './LogoUsage';
import { LogoGuidelines } from './LogoGuidelines';

export const LogoSection = () => (
  <section className="space-y-6">
    <h2 className="text-h2">Logo</h2>
    <div className="space-y-8">
      <div>
        <h3 className="text-h3 mb-4">Primary Logo</h3>
        <LogoUsage />
      </div>

      <div>
        <h3 className="text-h3 mb-4">Logo Variations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-h5 mb-2">Dark Background</h4>
            <LogoUsage backgroundColor="#2C3844" inverted={true} />
          </div>
          <div>
            <h4 className="text-h5 mb-2">Monochrome</h4>
            <LogoUsage color="#000000" />
          </div>
        </div>
      </div>

      <LogoGuidelines />
    </div>
  </section>
); 