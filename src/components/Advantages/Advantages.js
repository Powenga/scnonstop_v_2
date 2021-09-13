import { advantages } from '../../utils/constants';
import AdvantageCard from '../AdvantageCard/AdvantageCard';
import CardContainer from '../CardContainer/CardContainer';
import './Advantages.css';

export default function Advantages({ classes, onCardClick, children }) {
  return (
    <div className={`advantages ${classes ? classes : ''}`}>
      {children}
      <CardContainer
        classes="advantages__container"
        Component={AdvantageCard}
        cards={advantages}
        onCardClick={onCardClick}
        itemClasses="advantages__item"
      />
      <div className="advantages__img"></div>
    </div>
  );
}
