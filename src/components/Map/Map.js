import './Map.css';
import { useEffect, useRef } from 'react';

export default function Map({ classes, children }) {
  const scriptContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A33c502b48dd06ce3a0b1c8f51f3b7cdc3abebba80a2fec1cd1728e79e24abcef&amp;width=100%25&amp;height=550&amp;lang=ru_RU&amp;scroll=false';
    script.async = true;

    const scriptReff = scriptContainer.current;

    scriptReff.appendChild(script);

    return () => {
      scriptReff.innerHTML = '';
    };
  }, []);

  return (
    <div className={`map ${classes ? classes : ''}`}>
      {children}
      <div className="map__container" ref={scriptContainer}></div>
      <p className="map__info">
        Если вы воспользуетесь нашими услугами по ремонту, сумма диагностики
        будет вычтена из финальной стоимости
      </p>
    </div>
  );
}
