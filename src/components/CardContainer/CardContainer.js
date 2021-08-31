import './CardContainer.css';

function CardContainer({ classes, itemClasses,  Component, cards, onCardClick }) {
  return (
    <ul className={`card-container ${classes && classes}`}>
      {cards.map((card, index) => (
        <li className={`card-container__item ${itemClasses && itemClasses}`}>
        <Component
          key={index}
          imagePath={card.src}
          value={card.value}
          title={card.title}
          onClick={onCardClick}
        />
        </li>
      ))}
    </ul>
  );
}

export default CardContainer;
