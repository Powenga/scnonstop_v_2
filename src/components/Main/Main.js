import Promo from '../Promo/Promo';
import promoImgPath from '../../images/promo-img.jpg';
import './Main.css';
import Appliances from '../Appliances/Appliances';

function Main({ containerClasses, children }) {
  return (
    <main className="main">
      <section className="main__section main__section_type_promo">
        <Promo classes="app__container" />
        <img
          className="main__section-img"
          src={promoImgPath}
          alt="Мастер по ремонту бытовой техники и заказчик"
        />
      </section>
      <section className="main__section main__section_type_appliances">
        <Appliances classes="app__container">
          <div className="main__section-title-container">
            <h2 className="main__section-title">ЧТО МЫ РЕМОНТИРУЕМ</h2>
            <p className="main__section-subtitle">Начните с выбора техники</p>
          </div>
        </Appliances>
      </section>
    </main>
  );
}

export default Main;
