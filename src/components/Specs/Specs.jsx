import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import SectionTitleWithButton from '../SectionTitleWithButton/SectionTitleWithButton';
import CardContainer from '../CardContainer/CardContainer';
import SpecCard from '../SpecCard/SpecCard';
import { MODAL_TYPES_ADD_SPECS, specs } from '../../utils/constants';
import './Specs.css';

export default function Specs({ classes, onCardClick }) {
  return (
    <div className={`specs ${classes && classes}`}>
      <SectionTitleWithButton
        title="наши мастера"
        subtitle="Познакомтесь на нашими специалистами"
        modalType={MODAL_TYPES_ADD_SPECS}
        theme="dark"
      />
      <CardContainer
        classes="specs__container"
        Component={SpecCard}
        cards={specs}
        onCardClick={onCardClick}
        itemClasses="specs__item"
      />
      <Button type="button" classes="specs__more-button button_style_dark">ПОКАЗАТЬ ЕЩЁ</Button>
    </div>
  );
}

Specs.propTypes = {
  classes: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
