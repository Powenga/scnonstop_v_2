import React from 'react';
import './Social.css';

function Social({ classes, children }) {
  function handleClick(evt) { }

  return (
    <>
      <div className={`social ${classes && classes}`}>
        <button
          type="button"
          className="social__button"
          aria-label="Показать социальные сети"
          onClick={handleClick}
        >
          <svg
            width="50"
            height="46"
            viewBox="0 0 50 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="1">
              <rect width="50" height="46" fill="black" />
              <rect x="6" y="5" width="38" height="8" fill="white" />
              <rect x="6" y="19" width="38" height="8" fill="white" />
              <rect x="6" y="33" width="38" height="8" fill="white" />
            </g>
          </svg>
        </button>
        {children}
      </div>
    </>
  );
}

export default Social;
