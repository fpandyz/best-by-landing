export function Form() {
  return (
    <section className="form">
      <div className="container form__wrapper">
        <div className="form__image" />
        <div className="font-family-1 form__card">
          <div className="font-family-2 text-type-2 form__title">Свяжитесь с нами</div>
          <div className="text-type-5 form__description">
            Мы расскажем, как происходит внедрение системы
            в производственный процесс и ответим на все вопросы.
          </div>
          <a href="mailto:contact@tourmalinecore.com" className="form__btn">Написать на почту</a>
        </div>
      </div>
    </section>
  );
}
