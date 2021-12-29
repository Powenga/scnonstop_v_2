import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../CardContainer/CardContainer';
import SchemeCard from '../SchemeCard/SchemeCard';
import './Scheme.css';
import { schemeCards } from '../../utils/data';

export default function Scheme({ classes, children }) {
  return (
    <div className={`scheme ${classes || ''}`}>
      {children}
      <CardContainer
        classes="scheme__container"
        Component={SchemeCard}
        cards={schemeCards}
        itemClasses="scheme__item"
      />
    </div>
  );
}

Scheme.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Scheme.defaultProps = {
  classes: '',
};
