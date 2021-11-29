import React from 'react';
import PropTypes from 'prop-types';
import { newsPropTypes } from '../../utils/prop-types';
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
        <li className={`card-container__item ${itemClasses && itemClasses}`}>
          <Component
            key={card.id}
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
  Component: PropTypes.element.isRequired,
  cards: PropTypes.arrayOf(newsPropTypes).isRequired,
};

CardContainer.defaultProps = {
  classes: '',
  itemClasses: '',
};
