import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { newsPropTypes } from '../../utils/prop-types';
import './NewsCard.css';

export default function NewsCard({ card, onClick }) {
  const handleClick = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    onClick(card);
  }, [onClick]);

  const handleEnter = useCallback((event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleClick(event);
    }
  }, [onClick]);

  return (
    <div
      className="news-card"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleEnter}
    >
      <div
        className="news-card__img-wrap"
        style={{ backgroundImage: `url(${card.link}` }}
      />
      <h3 title={card.title} className="news-card__title">
        {card.title}
      </h3>
      <p className="news-card__date">{card.formattedDate}</p>
      <p className="news-card__content">{card.content}</p>
    </div>
  );
}

NewsCard.propTypes = {
  card: newsPropTypes,
  onClick: PropTypes.func,
};

NewsCard.defaultProps = {
  card: {},
  onClick: () => {},
};
