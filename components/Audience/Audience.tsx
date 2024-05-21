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
            <h2 className="text-type-5 audience__card-title">Кафе</h2>
          </div>
          <div className="audience__card">
            <h2 className="text-type-5 audience__card-title">Пекарни</h2>
          </div>
          <div className="audience__card">
            <h2 className="text-type-5 audience__card-title">Рестораны</h2>
          </div>
          <div className="audience__card">
            <h2 className="text-type-5 audience__card-title">Магазины</h2>
          </div>
          <div className="audience__card">
            <h2 className="text-type-5 audience__card-title">Столовые</h2>
          </div>
          <div className="audience__card">
            <h2 className="text-type-5 audience__card-title">Фастфуд</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
