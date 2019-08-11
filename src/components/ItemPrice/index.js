import React, { useState } from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemPrice = ({ price }) => {
  if (!price) {
    return null;
  }

  const [getNumberOfItems, setNumberOfItems] = useState(1);

  const handlePlusClick = () => {
    setNumberOfItems(getNumberOfItems + 1);
  };

  const handleMinusClick = () => {
    if (getNumberOfItems === 0) {
      return 0;
    }
    setNumberOfItems(getNumberOfItems - 1);
  };

  return (
    <div className="item-price">
      <ItemWrapper isCollapsible={false}>
        <div>
          <p className="item-price__value">£{getNumberOfItems * price}</p>
          <p>QTY {getNumberOfItems}</p>
          <p onClick={handlePlusClick}>(+)</p>
          <p onClick={handleMinusClick}>(-)</p>
        </div>
        <button className="item-price__size">Add to cart</button>
      </ItemWrapper>
    </div>
  );
};

export default ItemPrice;
