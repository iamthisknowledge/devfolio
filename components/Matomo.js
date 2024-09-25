// components/Matomo.js
'use client';

import Script from 'next/script';

export default function Matomo() {
  return (
    <>
      <Script id="matomo-tag-manager-inline" strategy="beforeInteractive">
        {`
          var _mtm = _mtm || [];
          _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        `}
      </Script>
      <Script
        src="http://localhost:8080/js/container_CLfDAfXl.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
