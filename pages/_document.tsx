/* eslint-disable @next/next/no-img-element */
/* eslint-disable @stylistic/max-len */
/* eslint-disable @next/next/inline-script-id */

import { optionYandexMetrika } from '@/components/Cookie/Cookie';
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';

export default function Document() {
  const isMetricsEnabled = process.env.NODE_ENV === 'production';

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {isMetricsEnabled
        && (
          <Script id="metrika-counter" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              var isCookieAccept = document.cookie.includes('cookieAccept=true');

              if (isCookieAccept) {
                ym(97415894, "init", ${JSON.stringify(optionYandexMetrika)})
              }
            `}
          </Script>
        )}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/97415894"
              style={{
                position: 'absolute',
                left: '-9999px',
              }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
