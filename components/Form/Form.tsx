import Image from 'next/image';
import InterfacePreviewSrc from '../../public/images/form-phone.webp';

export function Form() {
  return (
    <section className="form">
      <div className="container form__wrapper">
        {/* <div className="form__image" /> */}
        <Image
          src={InterfacePreviewSrc}
          className="form__image"
          alt="Interface Image"
        />
        <div className="form__card">
          <h2 className="text-type-2 form__title">Свяжитесь с нами</h2>
          <p className="font-weight-medium text-type-5 form__description">
            Мы расскажем, как происходит внедрение системы
            в производственный процесс и ответим на все вопросы.
          </p>
          <a href="mailto:contact@tourmalinecore.com" className="font-weight-medium form__btn">Написать на почту</a>
        </div>
      </div>
    </section>
  );
}
