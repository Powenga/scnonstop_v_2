import React from 'react';
import { newsPropTypes } from '../../utils/prop-types';
import styles from './NewsContent.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function NewsContent({ news }) {
  const { title, formattedDate, fullContent, link } = news;
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
      <p className="main-text">{fullContent}</p>
    </div>
  );
}

NewsContent.propTypes = {
  news: newsPropTypes.isRequired,
};
