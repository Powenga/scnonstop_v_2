import './CardContainer.css';

function CardContainer({
  classes, itemClasses, Component, cards, onCardClick, children,
}) {
  return (
    <ul className={`card-container ${classes && classes}`}>
      {cards.map((card, index) => (
        <li className={`card-container__item ${itemClasses && itemClasses}`}>
          <Component
            key={card.id}
            card={card}
            onClick={onCardClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default CardContainer;
