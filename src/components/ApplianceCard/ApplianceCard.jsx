import React from 'react';
import PropTypes from 'prop-types';
import { appliancePropTypes } from '../../utils/prop-types';
import './ApplianceCard.css';

function ApplianceCard({
  card, classes,
}) {
  return (
    <div
      className={`app-card ${classes || ''}`}
    >
      <figure className="app-card__container">
        <img className="app-card__image" src={card.src} alt={card.title} />
        <figcaption className="app-card__title">{card.title}</figcaption>
      </figure>
    </div>
  );
}

export default ApplianceCard;

ApplianceCard.propTypes = {
  card: appliancePropTypes.isRequired,
  classes: PropTypes.string,
};

ApplianceCard.defaultProps = {
  classes: '',
};
