import './NewsCard.css';

function NewsCard({ classes, card }) {
  return (
    <div className={`news-card ${classes && classes}`}>
      <div
        className="news-card__img-wrap"
        style={{ backgroundImage: `url(${card.link}` }}
      />
      <h3 title={card.title} className="news-card__title">
        {card.title}
      </h3>
      <p className="news-card__date">{card.date}</p>
      <p className="news-card__content">{card.content}</p>
    </div>
  );
}

export default NewsCard;
