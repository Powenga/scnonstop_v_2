import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function CookieMessage() {
  const [hideCookieMessageShow, setIsCookieMessageShow] = useState(() => {
    try {
      if (localStorage.getItem('hideCookieMessage')) {
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
      localStorage.setItem('hideCookieMessage', true);
      setIsCookieMessageShow(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (hideCookieMessageShow) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: '#fff',
        position: 'fixed',
        padding: 20,
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: '1px 1px 4px #000',
        zIndex: '500',
      }}
    >
      <p className="main-text">
        На сайте происходит сбор и обработка обезличенных данных о посетителях
        (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс
        Метрика, Гугл Аналитика и других) в соответсвии с{' '}
        <Link
          to="/policy"
          className="main-text"
          style={{
            color: '#27306B',
          }}
        >
          Политикой конфиденциальности
        </Link>
        .
      </p>
      <p className="main-text">
        Вы должны согласиться с использованием указанных технологий или покинуть
        сайт.
      </p>
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button type="button" onButtonClick={handleClick}>
          Я согласен
        </Button>
      </div>
    </div>
  );
}
