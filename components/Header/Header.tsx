import Image from 'next/image';
import LogoImageTabletSrc from '../../public/images/logo-best-by-tablet.svg';
import LogoImageDesktopSrc from '../../public/images/logo-best-by-desktop.svg';

export function Header() {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <Image
          src={LogoImageTabletSrc}
          className="header__logo header__logo--small"
          alt="Best By Logo"
          priority
        />
        <Image
          src={LogoImageDesktopSrc}
          className="header__logo header__logo--desktop"
          alt="Best By Logo"
          priority
        />
        <a href="mailto:contact@tourmalinecore.com" className="font-weight-medium header__btn">Оставить заявку</a>
      </div>
    </header>
  );
}
