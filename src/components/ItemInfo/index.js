import React from 'react';
import itemPhoto from '../../assets/bulb.png';

const ItemInfo = ({ data }) => {
  if (!data) {
    return null;
  }

  const { header, description } = data;

  return (
    <div className="item-info">
      <img className="item-info__photo" src={itemPhoto} />
      <h1 className="item-info__header">
        <div>{header}</div>
      </h1>
      <p className="item-info__description">{description}</p>
    </div>
  );
};

export default ItemInfo;
