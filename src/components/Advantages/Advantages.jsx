import React from 'react';
import PropTypes from 'prop-types';
import AdvantageCard from '../AdvantageCard/AdvantageCard';
import CardContainer from '../CardContainer/CardContainer';
import { advantages } from '../../utils/constants';
import './Advantages.css';

export default function Advantages({ classes, onCardClick, children }) {
  return (
    <div className={`advantages ${classes || ''}`}>
      {children}
      <CardContainer
        classes="advantages__container"
        Component={AdvantageCard}
        cards={advantages}
        onCardClick={onCardClick}
        itemClasses="advantages__item"
      />
      <div className="advantages__img" />
    </div>
  );
}

Advantages.propTypes = {
  classes: PropTypes.string,
  onCardClick: PropTypes.func,
  children: PropTypes.element.isRequired,
};

Advantages.defaultProps = {
  classes: '',
  onCardClick: () => {},
};
