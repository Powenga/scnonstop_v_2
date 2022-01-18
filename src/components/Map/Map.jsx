import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Map.css';

export default function Map({ classes, children }) {
  const [isFullHeight, setIsFullHeight] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const scriptContainer = useRef(null);

  let timeout;

  function checkMapHeight() {
    if (!timeout) {
      timeout = setTimeout(() => {
        if (scriptContainer.current) {
          const { top, height } =
            scriptContainer.current.getBoundingClientRect();
          const bottom = top + height;
          if (top <= 50 && bottom >= window.innerHeight - 50) {
            setIsFullHeight(true);
          } else {
            setIsFullHeight(false);
          }
          timeout = null;
        }
      }, 1500);
    }
  }

  function toggleMap(event) {
    event.preventDefault();
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    window.addEventListener('scroll', checkMapHeight);
    const script = document.createElement('script');
    script.src =
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A33c502b48dd06ce3a0b1c8f51f3b7cdc3abebba80a2fec1cd1728e79e24abcef&amp;width=100%25&amp;height=550px&amp;lang=ru_RU&amp;scroll=false';
    script.async = true;

    if (scriptContainer.current) {
      scriptContainer.current.appendChild(script);
    }

    return () => {
      window.removeEventListener('scroll', checkMapHeight);
      if (scriptContainer.current) {
        scriptContainer.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={`map ${classes || ''}`}>
      {children}
      <div
        className={`map__container ${
          isCollapsed && 'map__container_collapsed'
        }`}
        ref={scriptContainer}
      >
        {isFullHeight && !isCollapsed && (
          <button
            onClick={toggleMap}
            tabIndex={0}
            type="button"
            className="main-text map__hide-button"
          >
            Свернуть карту
          </button>
        )}
        {isCollapsed && (
          <button
            onClick={toggleMap}
            tabIndex={0}
            type="button"
            className="main-text map__show-button"
          >
            Развернуть карту
          </button>
        )}
      </div>
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
