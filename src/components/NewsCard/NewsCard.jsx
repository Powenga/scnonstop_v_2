import React from 'react';
import { newsPropTypes } from '../../utils/prop-types';
import './NewsCard.css';

export default function NewsCard({ card }) {
  return (
    <div className="news-card">
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
};

NewsCard.defaultProps = {
  card: {},
};
