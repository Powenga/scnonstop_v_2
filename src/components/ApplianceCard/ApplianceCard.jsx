import React from 'react';
import PropTypes from 'prop-types';
import { appliancePropTypes } from '../../utils/prop-types';
import './ApplianceCard.css';

function ApplianceCard({ card, classes, onClick }) {
  const handleClick = (event) => {
    onClick(event, card);
  };
  return (
    <button
      type="button"
      className={`app-card ${classes || ''}`}
      onClick={handleClick}
    >
      <figure className="app-card__container">
        <img className="app-card__image" src={card.src} alt={card.title} />
        <figcaption className="app-card__title">{card.title}</figcaption>
      </figure>
    </button>
  );
}

export default ApplianceCard;

ApplianceCard.propTypes = {
  card: appliancePropTypes.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ApplianceCard.defaultProps = {
  classes: '',
};
