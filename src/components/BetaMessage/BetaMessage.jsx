import React, { useState } from 'react';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function BetaMessage() {
  const [hideBetaMessageShow, setIsBetaMessageShow] = useState(() => {
    try {
      if (localStorage.getItem('hideBetaMessage')) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error.message);
    }
    return false;
  });

  const handleClick = (event) => {
    event.preventDefault();
    try {
      localStorage.setItem('hideBetaMessage', true);
      setIsBetaMessageShow(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (hideBetaMessageShow) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: '#fff',
        position: 'fixed',
        padding: 10,
        top: 20,
        left: 20,
        boxShadow: '1px 1px 4px #000',
        zIndex: '500',
      }}
    >
      <SectionTitle title="Сaйт находится в разработке" />
      <p className="main-text" style={{ textAlign: 'center' }}>
        Заказ на ремонт техники можно отправить на сайте:
      </p>
      <a
        href="https:/scnonstop.ru"
        className="main-text"
        style={{
          display: 'block',
          textAlign: 'center',
          color: '#27306B',
          fontSize: 32,
        }}
      >
        scnonstop.ru
      </a>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button type="button" onButtonClick={handleClick}>
          Понятно
        </Button>
      </div>
    </div>
  );
}
