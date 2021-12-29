import React from 'react';
import PropTypes from 'prop-types';
import Promo from '../components/Promo/Promo';
import Appliances from '../components/Appliances/Appliances';
import News from '../components/News/News';
import Scheme from '../components/Scheme/Scheme';
import Price from '../components/Price/Price';
import Advantages from '../components/Advantages/Advantages';
import OrderForm from '../components/OrderForm/OrderForm';
import Specs from '../components/Specs/Specs';
import Brands from '../components/Brands/Brands';
import Map from '../components/Map/Map';
import CallBackForm from '../components/CallbackForm/CallBackForm';
import { promoImgPath } from '../utils/data';
import { orderStatePropTypes } from '../utils/prop-types';

export default function Home({
  containerClasses,
  handleClickNews,
  handleDeleteNewsClick,
  handleEditNewsClick,
  handleDeleteSpecClick,
  handleEditSpecClick,
  orderState,
  orderRef,
  schemeRef,
  handleMoreDetailsClick,
  handleApplianceClick,
  handleAdvantageClick,
}) {
  return (
    <main className="main">
      <section className="main__section main__section_type_promo">
        <Promo
          classes={containerClasses}
          onMoreButtonClick={handleMoreDetailsClick}
        />
        <img
          className="main__section-img"
          src={promoImgPath}
          alt="Мастер по ремонту бытовой техники и заказчик"
        />
      </section>
      <section className="main__section main__section_type_appliances">
        <Appliances
          classes={containerClasses}
          handleApplianceClick={handleApplianceClick}
        >
          <div className="main__section-title-container">
            <h2 className="main__section-title">ЧТО МЫ РЕМОНТИРУЕМ</h2>
            <p className="main__section-subtitle">Начните с выбора техники</p>
          </div>
        </Appliances>
      </section>
      <section className="main__section main__section_type_news">
        <News
          classes={containerClasses}
          handleDeleteNewsClick={handleDeleteNewsClick}
          handleEditNewsClick={handleEditNewsClick}
          handleClickNews={handleClickNews}
        />
      </section>
      <section
        className="main__section main__section_type_schema"
        ref={schemeRef}
      >
        <Scheme classes={containerClasses}>
          <div className="main__section-title-container">
            <h2 className="main__section-title main__section-title_theme_dark">
              КАК МЫ РАБОТАЕМ
            </h2>
            <p className="main__section-subtitle main__section-subtitle_theme_dark">
              Эти простые шаги помогут решить Вашу проблему
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
        <Advantages
          classes={containerClasses}
          handleAdvantageClick={handleAdvantageClick}
        >
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
      <section
        className="main__section main__section_type_order-form"
        ref={orderRef}
      >
        <OrderForm classes={containerClasses} orderState={orderState}>
          <div className="main__section-title-container">
            <h2 className="main__section-title">ОФОРМЛЕНИЕ ЗАЯВКИ</h2>
          </div>
        </OrderForm>
      </section>
      <section className="main__section main__section_type_specs">
        <Specs
          classes={containerClasses}
          handleDeleteSpecClick={handleDeleteSpecClick}
          handleEditSpecClick={handleEditSpecClick}
        >
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
        <Brands classes={containerClasses} />
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

Home.propTypes = {
  containerClasses: PropTypes.string.isRequired,
  handleClickNews: PropTypes.func.isRequired,
  handleDeleteNewsClick: PropTypes.func.isRequired,
  handleEditNewsClick: PropTypes.func.isRequired,
  handleDeleteSpecClick: PropTypes.func.isRequired,
  handleEditSpecClick: PropTypes.func.isRequired,
  orderState: orderStatePropTypes.isRequired,
  orderRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  schemeRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  handleMoreDetailsClick: PropTypes.func.isRequired,
  handleApplianceClick: PropTypes.func.isRequired,
  handleAdvantageClick: PropTypes.func.isRequired,
};
