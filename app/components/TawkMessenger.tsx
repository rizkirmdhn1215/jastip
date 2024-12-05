'use client';

import { useEffect } from 'react';

// Define the shape of the Tawk API
interface TawkAPI {
  [key: string]: unknown;
}

// Declare the global variable for TypeScript
declare global {
  interface Window {
    Tawk_API?: TawkAPI;
  }
}

export default function TawkMessenger() {
  useEffect(() => {
    const tawkAPI: TawkAPI = window.Tawk_API || {};
    window.Tawk_API = tawkAPI;

    (function(){
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6751e0e32480f5b4f5a83aad/1iebtcudr';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode?.insertBefore(s1,s0);
    })();
  }, []);

  return null;
} 