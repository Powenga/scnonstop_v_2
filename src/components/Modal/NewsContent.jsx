import React from 'react';
import { newsPropTypes } from '../../utils/prop-types';
import styles from './NewsContent.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function NewsContent({ news }) {
  const {
    title,
    formattedDate,
    fullContent,
    link,
  } = news;
  return (
    <div className={styles.container}>
      <SectionTitle title={title} subtitle={formattedDate} />
      <div
        className={styles.imageWrap}
        style={{ backgroundImage: `url(${link}` }}
      />
      <p className={styles.content}>{fullContent}</p>
    </div>
  );
}

NewsContent.propTypes = {
  news: newsPropTypes.isRequired,
};
