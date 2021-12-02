import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Brands.css';
import { brandList } from '../../utils/data/brands';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Brands({ classes }) {
  const [brandsWithIcons, setBrandsWithIcons] = useState([]);

  useEffect(() => {
    setBrandsWithIcons(brandList.filter((elem) => elem.iconSrc));
  }, []);

  return (
    <div className={`brands ${classes}`}>
      <SectionTitle title="марки техники" />
      <ul className="brands__container">
        {brandsWithIcons.map((elem) => (
          <img
            key={elem.title}
            src={elem.iconSrc}
            alt={elem.title}
            className="brands__image"
          />
        ))}
      </ul>
    </div>
  );
}

Brands.propTypes = {
  classes: PropTypes.string,
};

Brands.defaultProps = {
  classes: '',
};
