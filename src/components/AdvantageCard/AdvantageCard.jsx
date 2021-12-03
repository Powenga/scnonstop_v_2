import React from 'react';
import PropTypes from 'prop-types';
import { advatnagePropTypes } from '../../utils/prop-types';
import './AdvantageCard.css';

export default function AdvantageCard({ classes, card }) {
  return (
    <div className={`advantage-card ${classes || ''}`}>
      <div className="advantage-card__image" style={{ backgroundImage: `url(${card.src})` }} />
      <div className="advantage-card__title-wrap">
        <h3 className="advantage-card__title">{card.title}</h3>
      </div>
    </div>
  );
}

AdvantageCard.propTypes = {
  classes: PropTypes.string,
  card: advatnagePropTypes.isRequired,
};

AdvantageCard.defaultProps = {
  classes: '',
};
