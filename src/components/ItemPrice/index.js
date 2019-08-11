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
        <div className="set-wrapper">
          <div className="foo">
            <div className="item-price__value">
              £{(getNumberOfItems * price).toFixed(2)}
            </div>

            <div className="item-price__counter">
              <div className="counter__label">QTY</div>
              <div className="counter">
                <div className="counter__sign" onClick={handleMinusClick}>
                  -
                </div>
                <div className="counter__number">{getNumberOfItems}</div>
                <div className="counter__sign" onClick={handlePlusClick}>
                  +
                </div>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button className="item-price__add-button">Add to cart</button>
          </div>
        </div>
      </ItemWrapper>
    </div>
  );
};

export default ItemPrice;
