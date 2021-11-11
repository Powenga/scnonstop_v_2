import './SchemeCard.css';

export default function SchemeCard({ classes, card }) {
  return (
    <div className={`scheme-card ${classes || ''}`}>
      <div className="scheme-card__text-wrap">
        <p className="scheme-card__text">{card.content}</p>
      </div>
      <img src={card.src} alt={card.alt} className="scheme-card__img" />
      <div className={`scheme-card__arrow scheme-card__arrow_stage_${card.stage}`} />
    </div>
  );
}
