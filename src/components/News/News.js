import './News.css';
import { newsCards } from '../../utils/constants';
import CardContainer from '../CardContainer/CardContainer';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

function News({ classes, onCardClick, children }) {
  return (
    <div className={`news ${classes && classes}`}>
      {children}
      <CardContainer
        classes="news__container"
        Component={NewsCard}
        cards={newsCards}
        onCardClick={onCardClick}
        itemClasses="news__item"
      />
      <Button classes="news__more" type="Button">Еще</Button>
    </div>
  );
}

export default News;
