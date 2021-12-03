import React from 'react';
import PropTypes from 'prop-types';
import promoImgPath from '../../images/promo-img.jpg';
import Button from '../Button/Button';
import './Promo.css';

function Promo({ classes }) {
  return (
    <div className={`promo ${classes || ''}`}>
      <div className="promo__text-wrap">
        <h1 className="promo__title">
          ДИАГНОСТИКА И&nbsp;РЕМОНТ БЫТОВОЙ ТЕХНИКИ НА&nbsp;ДОМУ
        </h1>
        <p className="promo__text">
          Сервисный центр NON-STOP - профессиональные услуги по&nbsp;ремонту
          стиральных машин, холодильников, посудомоечных машин
          и&nbsp;водонагревателей с&nbsp;выездом к&nbsp;заказчику.
        </p>
        <Button classes="promo__more button_style_dark" type="button">
          ПОДРОБНЕЕ
        </Button>
      </div>
      <div className="promo__img-wrap">
        <img
          className="promo__img"
          src={promoImgPath}
          alt="Мастер по ремонту бытовой техники и заказчик"
        />
      </div>
    </div>
  );
}

export default Promo;

Promo.propTypes = {
  classes: PropTypes.string,
};

Promo.defaultProps = {
  classes: '',
};
