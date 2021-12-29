import React from 'react';
import PropTypes from 'prop-types';
import AdvantageCard from '../AdvantageCard/AdvantageCard';
import { advantages } from '../../utils/constants';
import './Advantages.css';

export default function Advantages({
  classes,
  handleAdvantageClick,
  children,
}) {
  return (
    <div className={`advantages ${classes || ''}`}>
      {children}
      <ul className="advantages__container">
        {advantages.map((item) => (
          <li className="advantages__item">
            <AdvantageCard card={item} onClick={handleAdvantageClick} />
          </li>
        ))}
      </ul>
      <div className="advantages__img" />
    </div>
  );
}

Advantages.propTypes = {
  classes: PropTypes.string,
  handleAdvantageClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Advantages.defaultProps = {
  classes: '',
};
