import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemPrice = () => {
  return (
    <div className="item-price">
      <ItemWrapper isCollapsible={false}>
        <div>
          <p className="item-price__value">£12.99</p>
          <p>QTY + 1 - </p>
        </div>
        <button className="item-price__size">Add to cart</button>
      </ItemWrapper>
    </div>
  );
};

export default ItemPrice;
