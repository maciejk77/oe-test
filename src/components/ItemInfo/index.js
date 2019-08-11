import React from 'react';
import ItemWrapper from '../ItemWrapper';
import itemPhoto from '../../assets/bulb.png';

const ItemInfo = props => {
  return (
    <div className="item-info">
      <ItemWrapper isCollapsible={false}>
        <img className="item-info__photo" src={itemPhoto} />
        <h1 className="item-info__header">
          <div>Energy saving light bulb</div>
        </h1>
        <p className="item-info__description">25 W // Packet of 4</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemInfo;
