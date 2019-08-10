import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemPrice = () => {
  return (
    <div className="item-price">
      <ItemWrapper isCollapsible={false}>
        <p>£12.99</p>
        <button>Add to cart</button>
      </ItemWrapper>
    </div>
  );
};

export default ItemPrice;
