import Image from 'next/image';
import LogoImageMobileSrc from '../../public/images/MINI_LOGO.svg';
import LogoImageDesktopSrc from '../../public/images/LOGO.svg';

export function Header() {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <Image
          src={LogoImageMobileSrc}
          className="header__logo header__logo--small"
          alt="headerLogo"
        />
        <Image
          src={LogoImageDesktopSrc}
          className="header__logo header__logo--desktop"
          alt="headerLogo"
        />
        <a href="mailto:contact@tourmalinecore.com" className="manrope-500 header__btnPost">Оставить заявку</a>
      </div>
    </header>
  );
}
