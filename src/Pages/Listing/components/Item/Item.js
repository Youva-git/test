import React from 'react';
import itemStyling from './Item.module.scss';

const Item = ({ product }) => {
  const { media, name, retailPrice } = product;
  return (
    <div className={itemStyling.container}>
      <div className={itemStyling.image}>
        <img src={media.smallImageUrl} alt={name} />
      </div>
      <div className={itemStyling.details_container}>
        <h2 className={itemStyling.name}>{name}</h2>
        <h4 className={itemStyling.price}>{retailPrice} EUR</h4>
      </div>
    </div>
  );
}

export default Item;
