import './ApplianceCard.css';

function ApplianceCard({
  imagePath,
  value,
  title,
  classes,
  onClick,
  ...props
}) {
  function handleClick(evt) {
    onClick(value);
  }

  return (
    <div onClick={handleClick} className={`app-card ${classes ? classes : ''}`}>
      <figure className="app-card__container">
        <img className="app-card__image" src={imagePath} alt={title} />
        <figcaption className="app-card__title">{title}</figcaption>
      </figure>
    </div>
  );
}

export default ApplianceCard;
