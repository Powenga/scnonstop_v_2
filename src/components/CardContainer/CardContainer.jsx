import React from 'react';
import PropTypes from 'prop-types';
import { newsPropTypes, appliancePropTypes } from '../../utils/prop-types';
import './CardContainer.css';

export default function CardContainer({
  classes,
  itemClasses,
  Component,
  cards,
}) {
  return (
    <ul className={`card-container ${classes && classes}`}>
      {cards.map((card) => (
        <li
          className={`card-container__item ${itemClasses && itemClasses}`}
          key={card.id}
        >
          <Component
            card={card}
          />
        </li>
      ))}
    </ul>
  );
}

CardContainer.propTypes = {
  classes: PropTypes.string,
  itemClasses: PropTypes.string,
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  cards: PropTypes.oneOfType([
    PropTypes.arrayOf(newsPropTypes),
    PropTypes.arrayOf(appliancePropTypes),
  ]),
};

CardContainer.defaultProps = {
  classes: '',
  itemClasses: '',
  cards: [],
};
