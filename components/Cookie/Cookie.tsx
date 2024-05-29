import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { OptionYM } from '../../types/globals';

export const optionYandexMetrika: OptionYM = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
};

export function Cookie() {
  const [isCookie, setIsCookie] = useState(true);

  const isMetricsEnabled = process.env.NODE_ENV === 'production';

  const cookieAccept = 'cookieAccept';

  useEffect(() => {
    if (typeof getCookie(cookieAccept) === 'string') {
      setIsCookie(true);
    } else {
      setIsCookie(false);
    }
  }, []);

  if (isCookie) {
    return null;
  }

  return (
    <div>
      {!isCookie ? (
        <section className="font-weight-medium cookie">
          <p className="cookie__info">
            Мы используем файлы cookie для аналитики и маркетинга,
            чтобы вам было удобно пользоваться нашим веб-сайтом.
          </p>
          <button type="button" onClick={acceptCookie} className="cookie__btn">Хорошо</button>
          <button type="button" onClick={rejectCookie} className="cookie__btn cookie__btn--reject">Отказаться</button>
        </section>
      ) : <div />}
    </div>
  );

  function acceptCookie() {
    setCookie(cookieAccept, true);
    setIsCookie(true);

    if (isMetricsEnabled) {
      window.ym(97415894, 'init', optionYandexMetrika);
    }
  }

  function rejectCookie() {
    setCookie(cookieAccept, false);
    setIsCookie(true);
  }
}
