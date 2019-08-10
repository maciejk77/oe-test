import React from 'react';
import ItemWrapper from '../ItemWrapper';

const ItemInfo = () => {
  return (
    <div className="item-info">
      <ItemWrapper isCollapsible={false}>
        <h1>Energy saving light bulb</h1>
        <p>25 W // Package of 4</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemInfo;
