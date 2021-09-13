import { useEffect, useRef, useState } from 'react';
import './Price.css';
import { priceList } from '../../utils/constants';
import Button from '../Button/Button';
import PhoneLink from '../PhoneLink/PhoneLink';

function Price({ classes, children }) {
  const menuRef = useRef();
  const [appType, setAppType] = useState(priceList[0]);

  function handleClick(event) {
    setAppType(priceList.find(item => item.title === event.target.textContent));
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
    <div className={`price ${classes && classes}`}>
      {children}
      <ul className="price__menu" ref={menuRef}>
        {priceList.map((item, index) => (
          <li
            className={`price__menu-item ${item.title === appType.title && 'price__menu-item_active'}`}
            key={index}
            onClick={handleClick}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <ul className="price__container">
        {appType.content.map((item, index) =>
          (<li className="price__item">
            <p className="price__text">
              {item.problem}
              <span className="price__price">{item.price}</span>
            </p>
          </li>)
        )}
      </ul>
      <p className="price__content">Есть вопросы по стоимости? Хотите&nbsp;уточнить&nbsp;условия?</p>
      <p className="price__content price__content_type_accent">Позвоните нам или закажите обратный&nbsp;звонок!</p>
      <div className="price__button-wrap">
        <Button type='button' classes="price__button">заказать звонок</Button>
        <PhoneLink href="tel:+79508022222" classes="price__button">
            позвонить
          </PhoneLink>
      </div>
    </div>
  );
}

export default Price;
