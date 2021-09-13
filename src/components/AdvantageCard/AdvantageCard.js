import './AdvantageCard.css';

export default function AdvantageCard({ classes, card }) {
  return (
    <div className={`advantage-card ${classes ? classes : ''}`}>
      <div className="advantage-card__image" style={{backgroundImage: `url(${card.src})`}}></div>
      <div className="advantage-card__title-wrap">
        <h3 className="advantage-card__title">{card.title}</h3>
      </div>
    </div>
  );
}
