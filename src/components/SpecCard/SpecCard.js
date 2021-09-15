import './SpecCard.css';

export default function SpecCard({ card, classes, onClick }) {
  function getAgeWord(age) {
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      return 'лет';
    } else {
      count = count % 10;
      if (count === 1) {
        return 'год';
      }
      if (count >= 2 && count <= 4) {
        return 'года';
      }
      return 'лет';
    }
  }

  return (
    <div className={`spec-card ${classes ? classes : ''}`}>
      <figure className="spec-card__figure">
          <img
            src={card.src}
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
}
