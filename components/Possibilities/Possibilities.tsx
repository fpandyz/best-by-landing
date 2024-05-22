import Image from 'next/image';
import BarcodeImageSrc from '../../public/images/possibilities-barcode.jpg';
import ProductCardWhiteImageSrc from '../../public/images/possibilities-product-card-white.jpg';
import ProductCardExpiresSrc from '../../public/images/possibilities-status-card-expires.jpg';
import ProductCardExpiredSrc from '../../public/images/possibilities-status-card-expiredjpg.png';
import TieIconSrc from '../../public/images/possibilities-tie.svg';
import CapIconSrc from '../../public/images/possibilities-cap.svg';
import InterfaceImageSrc from '../../public/images/possibilities-interface.jpg';

export function Possibilities() {
  return (
    <section className="possibilities">
      <div className="container possibilities__wrapper">
        <h2 className="font-family-2 text-type-2 possibilities__title">Best By отслеживает срок годности продукции за вас</h2>
        <div className="font-family-1 possibilities__cards">
          <div className="possibilities__card">
            <span className="text-type-3 possibilities__label possibilities__label--white">Быстрое добавление товара</span>
            <p className="text-type-6 possibilities__description possibilities__description--white">
              Сканируйте штрихкод продукции и она сразу появится в системе.
              Вам останется только ввести срок годности и свойства продукта
            </p>
            <div className="possibilities__product-images">
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
            <span className="text-type-3 possibilities__label">Фильтрация по цехам</span>
            <p className="text-type-6 possibilities__description">
              Если у вас большое производство, продукцию можно разделить по цехам
              и отслеживать свежесть продукции в каждом из них
            </p>
            <span className="text-type-4 possibilities__category possibilities__category--red">Горячий</span>
            <span className="text-type-4 possibilities__category">Холодный</span>
            <span className="text-type-4 possibilities__category">Рыбный</span>
            <span className="text-type-4 possibilities__category">Мясной</span>
          </div>
          <div className="possibilities__card">
            <span className="text-type-3 possibilities__label">
              Система подскажет, когда срок годности подходит к концу
            </span>
            <p className="text-type-6 possibilities__description">
              У вас останется достаточное количество времени для снятия продукта с
              истекшим сроком годности с продажи, чтобы он не попал в руки покупателей
            </p>
            <div className="possibilities__state-images">
              <div className="possibilities__state-product">
                <span className="font-family-3 possibilities__state-title">Истекает срок годности</span>
                <Image
                  src={ProductCardExpiresSrc}
                  className="possibilities__image"
                  alt="Product Status Image"
                />
              </div>
              <div className="possibilities__state-product">
                <span className="font-family-3 possibilities__state-title">Просрочен</span>
                <Image
                  src={ProductCardExpiredSrc}
                  className="possibilities__image"
                  alt="Product Status Image"
                />
              </div>
            </div>
          </div>
          <div className="possibilities__card" />
          <div className="possibilities__card">
            <span className="text-type-3 possibilities__label">Управление аккаунтами</span>
            <p className="text-type-6 possibilities__description">
              Создавайте неограниченное количество аккаунтов для своей организации и
              разграничивайте доступ к информации между сотрудниками
            </p>
            <div className="possibilities__employees-images">
              <Image
                src={TieIconSrc}
                className="possibilities__image"
                alt="Employees Image"
              />
              <Image
                src={CapIconSrc}
                className="possibilities__image"
                alt="Employees Image"
              />
            </div>
          </div>
          <div className="possibilities__card">
            <span className="text-type-3 possibilities__label possibilities__label--white">Электронный бракеражный журнал</span>
            <p className="text-type-6 possibilities__description possibilities__description--white">
              После сканирования продукция попадает в журнал и доступна
              к выгрузке или печати. Доступ к нему возможен из любой точки,
              в отличие от бумажного журнала, который лежит на производстве
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
