import Image from 'next/image';
import SeafoodImageSrc from '../../public/images/seafood.jpg';
import PreviewInterfaceSrc from '../../public/images/previewInterface1.jpg';
import CakeSrc from '../../public/images/cake.jpg';

export function Hero() {
  return (
    <div className="hero">
      <div className="container hero__wrapper">
        <p className="font-family-2 text-type-1 hero__title">
          Сервис для отслеживания срока годности продукции
        </p>
        <p className="font-family-1 text-type-5 hero__description">
          Best By помогает продуктовым сетям и точкам общепита сохранять
          на прилавках только свежие и безопасные продукты
        </p>
        <div className="hero__cards">
          <Image
            src={SeafoodImageSrc}
            className="hero__cardImage"
            alt="Seafood Image"
          />
          <Image
            src={PreviewInterfaceSrc}
            className="hero__cardImage hero__cardImage_large"
            alt="Preview Interaface Image"
          />
          <Image
            src={CakeSrc}
            className="hero__cardImage"
            alt="Cake Image"
          />
        </div>
      </div>
    </div>
  );
}
