/* eslint-disable jsx-a11y/media-has-caption */
import Image from 'next/image';
import BarcodeImageSrc from '../../public/images/possibilities-barcode.jpg';
import ProductCardWhiteImageSrc from '../../public/images/possibilities-product-card-white.jpg';
import ProductCardExpiresSrc from '../../public/images/possibilities-status-expires.jpg';
import ProductCardExpiredSrc from '../../public/images/possibilities-status-expired.jpg';
import TieIconSrc from '../../public/images/possibilities-tie.svg';
import CapIconSrc from '../../public/images/possibilities-cap.svg';
import InterfaceImageSrc from '../../public/images/possibilities-interface.jpg';

export function Possibilities() {
  return (
    <section className="possibilities">
      <div className="container possibilities__wrapper">
        <h2 className="text-type-2 possibilities__title">Best By отслеживает срок годности продукции за вас</h2>
        <div className="font-weight-medium possibilities__cards">
          <div className="possibilities__card">
            <h3 className="text-type-3 possibilities__label possibilities__label--white">Быстрое добавление продукции</h3>
            <p className="text-type-6 possibilities__description possibilities__description--white">
              Сканируйте штрихкод продукции и&nbsp;она сразу появится в&nbsp;системе.
              Вам останется только ввести её свойства.
            </p>
            <div className="possibilities__barcode-images">
              <Image
                src={BarcodeImageSrc}
                className="possibilities__image"
                alt="Barcode Image"
              />
              <Image
                src={ProductCardWhiteImageSrc}
                className="possibilities__image"
                alt="Product Card Image"
              />
            </div>
          </div>
          <div className="possibilities__card">
            <h3 className="text-type-3 possibilities__label">Фильтрация по цехам</h3>
            <p className="text-type-6 possibilities__description">
              Если у вас большое производство, продукцию можно разделить по цехам
              и&nbsp;отслеживать свежесть продукции в&nbsp;каждом из них.
            </p>
            <div className="possibilities__categories">
              <span className="text-type-4 possibilities__category possibilities__category--red">Горячий</span>
              <span className="text-type-4 possibilities__category">Холодный</span>
              <span className="text-type-4 possibilities__category">Рыбный</span>
              <span className="text-type-4 possibilities__category">Мясной</span>
            </div>
          </div>
          <div className="possibilities__card">
            <h3 className="text-type-3 possibilities__label">
              Система подскажет, когда срок годности подходит к концу
            </h3>
            <p className="text-type-6 possibilities__description">
              У вас останется достаточное количество времени для снятия продукции с истекшим сроком
              годности с продажи, чтобы она не попала в руки покупателей.
            </p>
            <div className="possibilities__product-images">
              <div className="possibilities__state-card">
                <span className="possibilities__status-label">Истекает срок годности</span>
                <Image
                  src={ProductCardExpiresSrc}
                  className="possibilities__image"
                  alt="Product Status Image"
                />
              </div>
              <div className="possibilities__state-card">
                <span className="possibilities__status-label">Просрочен</span>
                <Image
                  src={ProductCardExpiredSrc}
                  className="possibilities__image"
                  alt="Product Status Image"
                />
              </div>
            </div>
          </div>
          <video
            className="possibilities__card"
            src="/video/possibilities-how-does-it-work.mp4"
            playsInline
            muted
            autoPlay
            loop
          />
          <div className="possibilities__card">
            <h3 className="text-type-3 possibilities__label">Управление аккаунтами</h3>
            <p className="text-type-6 possibilities__description">
              Создавайте неограниченное количество аккаунтов для своей организации и
              разграничивайте доступ к информации между сотрудниками.
            </p>
            <div className="possibilities__employees-images">
              <Image
                src={TieIconSrc}
                className="possibilities__employees-icon"
                alt="Employees Image"
              />
              <Image
                src={CapIconSrc}
                className="possibilities__employees-icon"
                alt="Employees Image"
              />
            </div>
          </div>
          <div className="possibilities__card">
            <h3 className="text-type-3 possibilities__label possibilities__label--white">Электронный бракеражный журнал</h3>
            <p className="text-type-6 possibilities__description possibilities__description--white">
              После сканирования продукция попадает в журнал и доступна
              к выгрузке или печати. Доступ к нему возможен из любой точки,
              в отличие от бумажного журнала, который лежит на производстве.
            </p>
            <div className="possibilities__interface-image">
              <Image
                src={InterfaceImageSrc}
                className="possibilities__image"
                alt="Interface Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
