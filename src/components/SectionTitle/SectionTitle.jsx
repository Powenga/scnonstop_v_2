import React from 'react';
import PropTypes from 'prop-types';
import './SectionTitle.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <>
      <div className="section-title-container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">
          {subtitle}
        </p>
      </div>
    </>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
