import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.css';

const SectionTitle = memo(({ title, subtitle, theme }) => (
  <>
    <div className="section-title-container">
      <h2
        className={`section-title ${theme && `section-title_theme_${theme}`}`}
      >
        {title}
      </h2>
      <p
        className={`section-subtitle ${
          theme && `section-subtitle_theme_${theme}`
        }`}
      >
        {subtitle}
      </p>
    </div>
  </>
));

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

SectionTitle.defaultProps = {
  theme: '',
};
