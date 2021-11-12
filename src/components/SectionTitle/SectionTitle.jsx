import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.css';

const SectionTitle = memo(({ title, subtitle }) => (
  <>
    <div className="section-title-container">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  </>
));

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
