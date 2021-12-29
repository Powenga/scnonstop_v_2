import React from 'react';
import { newsPropTypes } from '../../utils/prop-types';
import styles from './NewsContent.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function NewsContent({ news }) {
  const { title, formattedDate, fullContent, link } = news;
  const paragraphs = fullContent
    .split('\n')
    .map((text, index) => ({ id: index, content: text }));

  return (
    <div className={styles.container}>
      <SectionTitle
        title={title}
        subtitle={formattedDate}
        classes={styles.title}
      />
      <div className={styles.imageContainer}>
        <div className={styles.imageWrap}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${link}` }}
          />
        </div>
      </div>
      {paragraphs.map((item) => (
        <p key={item.id} className="main-text">
          {item.content}
        </p>
      ))}
    </div>
  );
}

NewsContent.propTypes = {
  news: newsPropTypes.isRequired,
};
