import Promo from '../Promo/Promo';
import promoImgPath from '../../images/promo-img.jpg'
import './Main.css';

function Main({ containerClasses, children }) {
  return (
    <main className="main">
      <section className="main__section main__section_type_promo">
        <Promo classes="app__container"/>
        <img
          className="main__section-img"
          src={promoImgPath}
          alt="Мастер по ремонту бытовой техники и заказчик"
        />
      </section>
    </main>
  );
}

export default Main;
