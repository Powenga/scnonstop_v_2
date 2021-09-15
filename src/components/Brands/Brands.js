import './Brands.css';
import { brandList } from '../../utils/data/brands';
import { useEffect, useState } from 'react';

export default function Brands({classes, children}) {
  const [brandsWithIcons, setBrandsWithIcons] = useState([])

  useEffect(() => {
    setBrandsWithIcons(brandList.filter(elem => elem.iconSrc));
  }, [])

  return (
    <div className={`brands ${classes}`}>
      {children}
      <ul className="brands__container">
      {brandsWithIcons.map((elem, index) => (
        <img key={index} src={elem.iconSrc} alt={elem.title} className="brands__image"/>
      ))}
      </ul>

    </div>
  )
}
