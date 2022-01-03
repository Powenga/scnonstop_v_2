import React from 'react';
import PropTypes from 'prop-types';
import ApplianceCard from '../ApplianceCard/ApplianceCard';
import { appliancesCards } from '../../utils/constants';
import './Appliances.css';

function Appliances({ classes, children, handleApplianceClick }) {
  return (
    <div className={`appliances ${classes && classes}`}>
      {children}
      <ul className="appliances__container">
        {appliancesCards.map((card) => (
          <li className="appliances__item" key={card.id}>
            <ApplianceCard card={card} onClick={handleApplianceClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appliances;

Appliances.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleApplianceClick: PropTypes.func.isRequired,
};
