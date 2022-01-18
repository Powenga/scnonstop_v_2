import React from 'react';
import styles from './MoreContent.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function MoreContent() {
  return (
    <div className={styles.container}>
      <SectionTitle
        title={'Сервисный центр NON\u2011STOP'}
        classes={styles.title}
        subtitle="Ремонтируем технику на дому быстро и в удобное для Вас время!"
      />
      <p className="main-text main-text_paragraph">
        Обратите внимание: мы выполняем ремонт техники на дому. Это важно,
        потому что Вам не нужно везти её в мастерскую!
      </p>
      <p className="main-text main-text_paragraph">
        Первым делом Вам нужно оставить заявку на нашем сайте или в соцсетях,
        после чего Вам перезвонит наш мастер, и Вы сможете договориться о
        времени.
      </p>
      <p className="main-text main-text_paragraph">
        Мастера нашего сервисного центра ремонтируют следующие виды техники:
      </p>
      <ul className="main-text main-text__list">
        <li>- стиральные машины;</li>
        <li>- посудомоечные машины;</li>
        <li>- холодильники;</li>
        <li>- водонагреватели.</li>
      </ul>
      <p className="main-text main-text_paragraph">
        Перед началом ремонта мастер обязательно проводит диагностику техники:
        другого способа выяснить причину поломки, к сожалению, не существует.
        После этого мастер сообщает Вам обо всех неисправностях и стоимости их
        устранения. Диагностика бесплатна, если ремонт выполняет наш мастер.
      </p>
      <p className="main-text main-text_paragraph">
        Если Вам нужна только диагностика, то стоимость услуги составит 500
        рублей.
      </p>
      <p className="main-text main-text_paragraph">
        Воспользуйтесь нашими преимуществами:
      </p>
      <ul className="main-text main-text__list">
        <li>1. Выезд мастера на дом - мы экономим Ваше время;</li>
        <li>2. Разумные цены, ведь мы работаем без посредников;</li>
        <li>3. Применяем оригинальные запчасти;</li>
        <li>
          4. Гарантия на ремонт электроники 3 месяца, гарантия до 1 года на
          остальные виды работ.
        </li>
      </ul>
      <p className="main-text main-text_paragraph">
        Оставьте заявку и мы починим технику!
      </p>
      <p className="main-text main-text_paragraph">
        Сервисный центр NON-STOP - когда все работает без остановки!
      </p>
      <p className="main-text main-text_paragraph">{`Липецк, ${new Date().getFullYear()}`}</p>
    </div>
  );
}
