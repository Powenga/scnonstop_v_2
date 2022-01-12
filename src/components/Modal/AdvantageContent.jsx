import React from 'react';
import styles from './MoreContent.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { advatnagePropTypes } from '../../utils/prop-types';

const AdvantageContent = ({ card }) => {
  return (
    <div className={styles.container}>
      <SectionTitle title={card.title} classes={styles.title} />
      <p className="main-text main-text_paragraph">{card.content}</p>
    </div>
  );
};

AdvantageContent.propTypes = {
  card: advatnagePropTypes.isRequired,
};

export default AdvantageContent;
