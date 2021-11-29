import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../CardContainer/CardContainer';
import ApplianceCard from '../ApplianceCard/ApplianceCard';
import { appliancesCards } from '../../utils/constants';
import './Appliances.css';

function Appliances({ classes, onCardClick, children }) {
  return (
    <div className={`appliances ${classes && classes}`}>
      {children}
      <CardContainer
        classes="appliances__container"
        Component={ApplianceCard}
        cards={appliancesCards}
        onCardClick={onCardClick}
        itemClasses="appliances__item"
      />
    </div>
  );
}

export default Appliances;

Appliances.propTypes = {
  classes: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
