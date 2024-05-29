export function Advantages() {
  return (
    <section className="advantages">
      <div className="container advantages__wrapper">
        <div className="advantages__sticky-wrapper">
          <h2 className="font-family-2 text-type-2 advantages__title">Преимущества</h2>
        </div>
        <div className="advantages__col-wrapper">
          <div className="advantages__card">
            <h3 className="font-family-1 text-type-3 advantages__label">Надёжно</h3>
            <p className="font-family-1 text-type-6 advantages__description">
              Наш сервис обеспечивает надежное хранение
              и управление сроками годности, минимизируя ошибки
              и потерю информации
            </p>
          </div>
          <div className="advantages__card">
            <h3 className="font-family-1 text-type-3 advantages__label">Удобно</h3>
            <p className="font-family-1 text-type-6 advantages__description">
              Мы позаботились, чтобы пользователь с любым уровнем
              владения ПК мог быстро освоить сервис благодаря
              интуитивно понятному интерфейсу.
            </p>
          </div>
          <div className="advantages__card">
            <h3 className="font-family-1 text-type-3 advantages__label">Доступно</h3>
            <p className="font-family-1 text-type-6 advantages__description">
              Наш сервис можно легко и быстро внедрить
              в производство с минимальными затратами.
            </p>
          </div>
          <div className="advantages__card">
            <h3 className="font-family-1 text-type-3 advantages__label">Гибко</h3>
            <p className="font-family-1 text-type-6 advantages__description">
              Сервис адаптирован под любое устройство: ТСД, планшет,
              смартфон, компьютер. Сотрудники заносят данные на производстве,
              а руководство может проверять их из офиса.
            </p>
          </div>
          <div className="advantages__card">
            <h3 className="font-family-1 text-type-3 advantages__label">Эффективно</h3>
            <p className="font-family-1 text-type-6 advantages__description">
              Best By оптимизирует отслеживание сроков годности,
              помогая вам сэкономить время и ресурсы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
