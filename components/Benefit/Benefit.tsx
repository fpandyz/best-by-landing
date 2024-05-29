import Image from 'next/image';
import DiagramSrc from '../../public/images/diagram.svg';
import CustomersSrc from '../../public/images/customers.png';

export function Benefit() {
  return (
    <section className="benefit">
      <div className="container benefit__wrapper">
        <div className="benefit__card">
          <h2 className="text-type-2 benefit__block-title">Чем полезен</h2>
        </div>
        <div className="benefit__card">
          <p className="font-weight-medium benefit__description">
            Вам и вашим сотрудникам больше не нужно проверять свежесть продукции вручную.
            Best By поможет сосредоточиться только на продукции требующей вашего внимания
          </p>
        </div>
        <div className="benefit__card">
          <h3 className="font-weight-medium text-type-4 benefit__title benefit__title--short">Уменьшает убытки</h3>
          <p className="font-weight-medium text-type-6 benefit__description">Сокращает списания товаров с истекшим сроком годности</p>
          <Image
            src={DiagramSrc}
            className="benefit__diagram"
            alt="Diagram Image"
          />
        </div>
        <div className="benefit__card">
          <h3 className="font-weight-medium text-type-4 benefit__title">Помогает контролировать работу сотрудников</h3>
        </div>
        <div className="benefit__card">
          <h3 className="font-weight-medium text-type-4 benefit__title">Повышает доверие покупателей</h3>
          <p className="font-weight-medium text-type-6 benefit__description">Отслеживает продукцию, попадающую на прилавок</p>
          <Image
            src={CustomersSrc}
            className="benefit__customers"
            alt="Customer Trust Image"
          />
        </div>
        <div className="benefit__card">
          <h3 className="font-weight-medium text-type-4 benefit__title">Снижает риск продажи просроченной продукции</h3>
        </div>
      </div>
    </section>
  );
}
