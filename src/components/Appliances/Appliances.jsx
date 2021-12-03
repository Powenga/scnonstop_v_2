import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../CardContainer/CardContainer';
import ApplianceCard from '../ApplianceCard/ApplianceCard';
import { appliancesCards } from '../../utils/constants';
import './Appliances.css';

function Appliances({ classes, children }) {
  return (
    <div className={`appliances ${classes && classes}`}>
      {children}
      <CardContainer
        classes="appliances__container"
        Component={ApplianceCard}
        cards={appliancesCards}
        itemClasses="appliances__item"
      />
    </div>
  );
}

export default Appliances;

Appliances.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
