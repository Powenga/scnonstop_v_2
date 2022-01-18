import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import PhoneLink from '../PhoneLink/PhoneLink';
import styles from './Price.module.css';
import { priceList } from '../../utils/data';

function Price({ classes, children, handleCallbackClick }) {
  const menuRef = useRef();
  const [appType, setAppType] = useState(priceList[0]);

  function handleClick(event) {
    setAppType(
      priceList.find((item) => item.title === event.target.textContent),
    );
  }

  useEffect(() => {
    const menuNode = menuRef.current;

    function onWheel(event) {
      event.preventDefault();
      menuNode.scrollTo({
        left: menuNode.scrollLeft + event.deltaY,
        behavior: 'smooth',
      });
    }

    if (menuNode) {
      menuNode.addEventListener('wheel', onWheel);
    }

    return () => {
      menuNode.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div className={`${styles.price} ${classes || ''}`}>
      {children}
      <div className={styles.menuWrap}>
        <ul className={styles.menu} ref={menuRef}>
          {priceList.map((item) => (
            <li className={styles['menu-item']} key={item.id}>
              <button
                className={`${styles['menu-button']} ${
                  item.title === appType.title && styles['menu-button_active']
                }`}
                type="button"
                onClick={handleClick}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ul className={`${styles.container} problem`}>
        {appType.content.map((item) => (
          <li className={`${styles.item} problem__item`} key={item.id}>
            <p className={`${styles.text} problem__text`}>
              {item.task}
              <span className={styles['text-price']}>
                {`от ${item.price} руб.`}
              </span>
            </p>
          </li>
        ))}
      </ul>

      <p className={styles.content}>
        Есть вопросы по стоимости? Хотите&nbsp;уточнить&nbsp;условия?
      </p>
      <p className={`${styles.content} ${styles.content_type_accent}`}>
        Позвоните нам или закажите обратный&nbsp;звонок!
      </p>
      <div className={styles['button-wrap']}>
        <Button
          type="button"
          classes={styles.button}
          onButtonClick={handleCallbackClick}
        >
          заказать звонок
        </Button>
        <PhoneLink href="tel:+79508022222" classes={styles.button}>
          позвонить
        </PhoneLink>
      </div>
      <p className={`main-text ${styles.note}`}>
        * Точную стоимость работ мастер определит после диагностики. Цены
        указаны за работу без заменяемых деталей.
      </p>
      <p className={`main-text ${styles.note}`}>
        ** Диагностика бесплатная, если ремонт осуществляется нашими мастерами.
        Стоимость ремонта не менее 500 руб, так как эта цена включает выезд
        мастера.
      </p>
    </div>
  );
}

export default Price;

Price.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.element.isRequired,
  handleCallbackClick: PropTypes.func.isRequired,
};

Price.defaultProps = {
  classes: '',
};
