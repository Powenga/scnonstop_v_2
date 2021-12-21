import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { specsPropTypes } from '../../utils/prop-types';
import './SpecCard.css';

const SpecCard = ({ card, classes, onClick }) => {
  function getAgeWord(age) {
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      return 'лет';
    }
    count %= 10;
    if (count === 1) {
      return 'год';
    }
    if (count >= 2 && count <= 4) {
      return 'года';
    }
    return 'лет';
  }

  const handleClick = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      onClick(card);
    },
    [onClick],
  );

  const handleEnter = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleClick(event);
      }
    },
    [onClick],
  );

  return (
    <div
      className={`spec-card ${classes || ''}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleEnter}
    >
      <figure className="spec-card__figure">
        <img
          src={card.link}
          alt="Фотография специалиста"
          className="spec-card__image"
        />
        <figcaption className="spec-card__figcaption">
          {`${card.name}, ${card.age} ${getAgeWord(card.age)}`}
        </figcaption>
      </figure>
      <p className="spec-card__about">{card.about}</p>
    </div>
  );
};

SpecCard.propTypes = {
  card: specsPropTypes.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

SpecCard.defaultProps = {
  classes: '',
  onClick: () => {},
};

export default memo(SpecCard);
