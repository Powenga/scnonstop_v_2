import { specs } from '../../utils/constants';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import SpecCard from '../SpecCard/SpecCard';
import './Specs.css';

export default function Specs({ classes, onCardClick, children }) {
  return (
    <div className={`specs ${classes && classes}`}>
      {children}
      <CardContainer
        classes="specs__container"
        Component={SpecCard}
        cards={specs}
        onCardClick={onCardClick}
        itemClasses="specs__item"
      />
      <Button type="button" classes="specs__more-button button_style_dark" >ПОКАЗАТЬ ЕЩЁ</Button>
    </div>
  );
}
