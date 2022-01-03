import React from 'react';
import PropTypes from 'prop-types';
import { advatnagePropTypes } from '../../utils/prop-types';
import './AdvantageCard.css';

export default function AdvantageCard({ classes, card, onClick }) {
  const handleClick = (event) => {
    onClick(event, card);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`advantage-card ${classes || ''}`}
    >
      <div
        className="advantage-card__image"
        style={{ backgroundImage: `url(${card.src})` }}
      />
      <div className="advantage-card__title-wrap">
        <h3 className="advantage-card__title">{card.title}</h3>
      </div>
    </button>
  );
}

AdvantageCard.propTypes = {
  classes: PropTypes.string,
  card: advatnagePropTypes.isRequired,
  onClick: PropTypes.func.isRequired,
};

AdvantageCard.defaultProps = {
  classes: '',
};
