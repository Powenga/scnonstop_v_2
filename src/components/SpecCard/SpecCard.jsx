import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { specsPropTypes } from '../../utils/prop-types';
import './SpecCard.css';

const SpecCard = ({ card, classes, onClick }) => {
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
          {`${card.name}`}
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
