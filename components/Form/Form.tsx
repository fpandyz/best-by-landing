import Image from 'next/image';
import PhoneImageSrc from '../../public/images/form-phone.jpg';

export function Form() {
  return (
    <section className="form">
      <div className="container form__wrapper">
        <div className="form__card">
          <Image
            src={PhoneImageSrc}
            className="form__image"
            alt="Phone Image"
          />
        </div>
        <div className="from__card">
          <div className="form__title">Свяжитесь с нами</div>
          <div className="form__description">
            Мы расскажем, как происходит внедрение системы
            в производственный процесс и ответим на все вопросы.
          </div>
          <a href="mailto:contact@tourmalinecore.com" className="form__btn">Написать на почту</a>
        </div>
      </div>
    </section>
  );
}
