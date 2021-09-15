import Promo from '../Promo/Promo';
import promoImgPath from '../../images/promo-img.jpg';
import './Main.css';
import Appliances from '../Appliances/Appliances';
import News from '../News/News';
import Scheme from '../Scheme/Scheme';
import Price from '../Price/Price';
import Advantages from '../Advantages/Advantages';
import OrderForm from '../OrderForm/OrderForm';

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
      <section className="main__section main__section_type_news">
        <News classes="app__container">
          <div className="main__section-title-container">
            <h2 className="main__section-title">НОВОСТИ И АКЦИИ</h2>
            <p className="main__section-subtitle">
              Узнайте о наших специальных предложениях
            </p>
          </div>
        </News>
      </section>
      <section className="main__section main__section_type_schema">
        <Scheme classes="app__container">
          <div className="main__section-title-container">
            <h2 className="main__section-title main__section-title_theme_dark">
              КАК МЫ РАБОТАЕМ
            </h2>
            <p className="main__section-subtitle main__section-subtitle_theme_dark">
              Познакомтесь со схемой работы
            </p>
          </div>
        </Scheme>
      </section>
      <section className="main__section main__section_type_price">
        <Price classes="app__container">
          <div className="main__section-title-container">
            <h2 className="main__section-title">Стоимость ремонта</h2>
            <p className="main__section-subtitle">
              Ознакомьтесь с нашим прайс-листом
            </p>
          </div>
        </Price>
      </section>
      <section className="main__section main__section_type_advantages">
        <Advantages classes="app__container">
          <div className="main__section-title-container">
            <h2 className="main__section-title main__section-title_theme_dark">
              наши преимущества
            </h2>
            <p className="main__section-subtitle main__section-subtitle_theme_dark">
              Оцените плюсы работы с нами
            </p>
          </div>
        </Advantages>
      </section>
      <section className="main__section main__section_type_order-form">
        <OrderForm classes="app__container">
        <div className="main__section-title-container">
            <h2 className="main__section-title">
              ОФОРМЛЕНИЕ ЗАЯВКИ
            </h2>
          </div>
        </OrderForm>
      </section>
    </main>
  );
}

export default Main;
