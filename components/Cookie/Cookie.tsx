import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';

export function Cookie() {
  const [isCookie, setIsCookie] = useState(true);

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
        <section className="font-family-1 cookie">
          <p className="cookie__info">
            Мы используем файлы cookies и сервисы аналитики, чтобы вам было
            удобно пользоваться сайтом. Оставаясь на сайте, вы соглашаетесь с этим.
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
  }

  function rejectCookie() {
    setCookie(cookieAccept, false);
    setIsCookie(true);
  }
}
