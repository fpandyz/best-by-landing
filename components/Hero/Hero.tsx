import Image from 'next/image';
import SeafoodImageSrc from '../../public/images/seafood.jpg';
import PreviewInterfaceSrc from '../../public/images/previewInterface.jpg';
import CakeSrc from '../../public/images/cake.jpg';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__wrapper">
        <h1 className="text-type-1 hero__title">
          Сервис для отслеживания срока годности продукции
        </h1>
        <p className="font-weight-medium text-type-5 hero__description">
          Best By помогает продуктовым сетям и точкам общепита сохранять
          на прилавках только свежие и безопасные продукты
        </p>
        <div className="hero__cards">
          <Image
            src={SeafoodImageSrc}
            className="hero__card-image"
            alt="Seafood Image"
          />
          <Image
            src={PreviewInterfaceSrc}
            className="hero__card-image hero__card-image--large"
            alt="Preview Interface Image"
          />
          <Image
            src={CakeSrc}
            className="hero__card-image"
            alt="Cake Image"
          />
        </div>
      </div>
    </section>
  );
}
