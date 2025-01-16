import React from 'react';

export const LogoUsage = ({ backgroundColor = "white", color = "#2C2C2C", inverted = false }) => (
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