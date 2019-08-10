import React from 'react';
import ItemWrapper from '../ItemWrapper';
import itemPhoto from '../../assets/bulb.png';

const ItemInfo = () => {
  return (
    <div className="item-info">
      <ItemWrapper isCollapsible={false}>
        <img src={itemPhoto} width="85%" />
        <h1>Energy saving light bulb</h1>
        <p>25 W // Package of 4</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemInfo;
