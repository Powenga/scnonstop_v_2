import { schemeCards } from '../../utils/constants';
import CardContainer from '../CardContainer/CardContainer';
import SchemeCard from '../SchemeCard/SchemeCard';
import './Scheme.css';

export default function Scheme({ classes, onCardClick, children }) {
  return (
    <div className={`scheme ${classes ? classes : ''}`}>
      {children}
      <CardContainer
        classes="scheme__container"
        Component={SchemeCard}
        cards={schemeCards}
        onCardClick={onCardClick}
        itemClasses="scheme__item"
      />
    </div>
  );
}
