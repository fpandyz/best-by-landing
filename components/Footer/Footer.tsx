import { useState, useEffect } from 'react';

export function Footer() {
  const [date, setDate] = useState<string>();

  useEffect(() => {
    const year = String(new Date().getFullYear());

    if (year === '2024') {
      setDate(year);
    } else {
      setDate(`2024-${year}`);
    }
  }, []);

  return (
    <footer className="footer">
      <div className="font-weight-medium container footer__wrapper">
        <span className="footer__text">
          {`© Best By ${date}`}
        </span>
        <a href="mailto:contact@tourmalinecore.com" className="footer__text">contact@tourmalinecore.com</a>
      </div>
    </footer>
  );
}
