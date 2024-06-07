import Image from 'next/image';
import CafeImageSrc from '../../public/images/audience-coffie.webp';
import CakeImageSrc from '../../public/images/audience-cakes.webp';
import TablesImageSrc from '../../public/images/audience-tables.webp';
import FishImageSrc from '../../public/images/audience-fish.webp';
import HerbsImageSrc from '../../public/images/audience-herbs.webp';
import PizzaImageSrc from '../../public/images/audience-pizza.webp';

export function Audience() {
  return (
    <section className="audience">
      <div className="container audience__wrapper">
        <h2 className="text-type-2 audience__title">Для кого создан Best By</h2>
        <p className="font-weight-medium text-type-5 audience__description">
          Сервис будет полезен для продуктовых сетей и предприятий общественного
          питания, работающих со скоропорящейся продукцией.
        </p>
        <div className="font-weight-medium audience__cards">
          <div className="audience__card">
            <span className="text-type-5 audience__label">Кафе</span>
            <Image
              src={CafeImageSrc}
              className="audience__image"
              alt="Cafe Card Image"
            />
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Пекарни</span>
            <Image
              src={CakeImageSrc}
              className="audience__image"
              alt="Cafe Card Image"
            />
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Рестораны</span>
            <Image
              src={TablesImageSrc}
              className="audience__image"
              alt="Cafe Card Image"
            />
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Магазины</span>
            <Image
              src={FishImageSrc}
              className="audience__image"
              alt="Cafe Card Image"
            />
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Столовые</span>
            <Image
              src={HerbsImageSrc}
              className="audience__image"
              alt="Cafe Card Image"
            />
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Фастфуд</span>
            <Image
              src={PizzaImageSrc}
              className="audience__image"
              alt="Cafe Card Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
