import React from 'react';
import PropTypes from 'prop-types';
import Promo from '../Promo/Promo';
import promoImgPath from '../../images/promo-img.jpg';
import Appliances from '../Appliances/Appliances';
import News from '../News/News';
import Scheme from '../Scheme/Scheme';
import Price from '../Price/Price';
import Advantages from '../Advantages/Advantages';
import OrderForm from '../OrderForm/OrderForm';
import Specs from '../Specs/Specs';
import Brands from '../Brands/Brands';
import Map from '../Map/Map';
import CallBackForm from '../CallbackForm/CallBackForm';
import './Main.css';

export default function Main({ containerClasses }) {
  return (
    <main className="main">
      <section className="main__section main__section_type_promo">
        <Promo classes={containerClasses} />
        <img
          className="main__section-img"
          src={promoImgPath}
          alt="Мастер по ремонту бытовой техники и заказчик"
        />
      </section>
      <section className="main__section main__section_type_appliances">
        <Appliances classes={containerClasses}>
          <div className="main__section-title-container">
            <h2 className="main__section-title">ЧТО МЫ РЕМОНТИРУЕМ</h2>
            <p className="main__section-subtitle">Начните с выбора техники</p>
          </div>
        </Appliances>
      </section>
      <section className="main__section main__section_type_news">
        <News classes={containerClasses} />
      </section>
      <section className="main__section main__section_type_schema">
        <Scheme classes={containerClasses}>
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
        <Price classes={containerClasses}>
          <div className="main__section-title-container">
            <h2 className="main__section-title">Стоимость ремонта</h2>
            <p className="main__section-subtitle">
              Ознакомьтесь с нашим прайс-листом
            </p>
          </div>
        </Price>
      </section>
      <section className="main__section main__section_type_advantages">
        <Advantages classes={containerClasses}>
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
        <OrderForm classes={containerClasses}>
          <div className="main__section-title-container">
            <h2 className="main__section-title">ОФОРМЛЕНИЕ ЗАЯВКИ</h2>
          </div>
        </OrderForm>
      </section>
      <section className="main__section main__section_type_specs">
        <Specs classes={containerClasses}>
          <div className="main__section-title-container">
            <h2 className="main__section-title main__section-title_theme_dark">
              наши мастера
            </h2>
            <p className="main__section-subtitle main__section-subtitle_theme_dark">
              Познакомтесь на нашими специалистами
            </p>
          </div>
        </Specs>
      </section>
      <section className="main__section main__section_type_brands">
        <Brands classes={containerClasses}>
          <div className="main__section-title-container">
            <h2 className="main__section-title">марки техники</h2>
          </div>
        </Brands>
      </section>
      <section className="main__section">
        <Map>
          <div className="main__section-title-container">
            <h2 className="main__section-title">карта обслуживания</h2>
          </div>
        </Map>
      </section>
      <section className="main__section main__section_type_callback">
        <CallBackForm classes={containerClasses}>
          <div className="main__section-title-container">
            <h2 className="main__section-title">ОСТАЛИСЬ ВОПРОСЫ?</h2>
          </div>
        </CallBackForm>
      </section>
    </main>
  );
}

Main.propTypes = {
  containerClasses: PropTypes.string.isRequired,
};
