import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Map.css';

export default function Map({ classes, children }) {
  const scriptContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A33c502b48dd06ce3a0b1c8f51f3b7cdc3abebba80a2fec1cd1728e79e24abcef&amp;width=100%25&amp;height=550px&amp;lang=ru_RU&amp;scroll=false';
    script.async = true;

    const scriptReff = scriptContainer.current;

    scriptReff.appendChild(script);

    return () => {
      scriptReff.innerHTML = '';
    };
  }, []);

  return (
    <div className={`map ${classes || ''}`}>
      {children}
      <div className="map__container" ref={scriptContainer} />
    </div>
  );
}

Map.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Map.defaultProps = {
  classes: '',
};
