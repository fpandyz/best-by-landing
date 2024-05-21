export function Audience() {
  return (
    <div className="audience">
      <div className="font-family-1 container audience__wrapper">
        <h2 className="font-family-2 text-type-2 audience__title">Для кого создан Best By</h2>
        <p className="text-type-5 audience__description">
          Сервис будет полезен для продуктовых сетей и предприятий общественного
          питания, работающих со скоропорящейся продукцией
        </p>
        <div className="audience__cards">
          <div className="audience__card">
            <span className="text-type-5 audience__label">Кафе</span>
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Пекарни</span>
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Рестораны</span>
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Магазины</span>
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Столовые</span>
          </div>
          <div className="audience__card">
            <span className="text-type-5 audience__label">Фастфуд</span>
          </div>
        </div>
      </div>
    </div>
  );
}
