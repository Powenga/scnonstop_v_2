import React from 'react';
import PropTypes from 'prop-types';
import { promoImgPath } from '../../utils/data';
import Button from '../Button/Button';
import './Promo.css';
import useLoad from '../../hooks/useLoad';

function Promo({ classes, onMoreButtonClick }) {
  const { isLoad, setIsLoad, style } = useLoad(false);

  const handleClick = (event) => {
    onMoreButtonClick(event);
  };

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
        <Button
          classes="promo__more button_style_dark"
          type="button"
          onButtonClick={handleClick}
        >
          ПОДРОБНЕЕ
        </Button>
      </div>
      <div
        className={`promo__img-wrap  image-preloader ${
          !isLoad ? 'image-preloader_animate' : ''
        }`}
      >
        <img
          onLoad={() => setIsLoad(true)}
          style={style}
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
  onMoreButtonClick: PropTypes.func.isRequired,
};

Promo.defaultProps = {
  classes: '',
};
