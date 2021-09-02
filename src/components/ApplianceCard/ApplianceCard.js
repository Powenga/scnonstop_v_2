import './ApplianceCard.css';

function ApplianceCard({ card, classes, onClick, ...props }) {
  function handleClick(evt) {
    onClick(evt.value);
  }

  return (
    <div onClick={handleClick} className={`app-card ${classes ? classes : ''}`}>
      <figure className="app-card__container">
        <img className="app-card__image" src={card.src} alt={card.title} />
        <figcaption className="app-card__title">{card.title}</figcaption>
      </figure>
    </div>
  );
}

export default ApplianceCard;
