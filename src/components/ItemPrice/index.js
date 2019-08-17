import React, { useState } from 'react';
import './styles.scss';

const ItemPrice = ({ price }) => {
  if (!price) {
    return null;
  }

  const [getNumberOfItems, setNumberOfItems] = useState(1);
  const fullPrice = (getNumberOfItems * price).toFixed(2).split('.');
  const [pounds, pence] = fullPrice;

  const handlePlusClick = () => {
    setNumberOfItems(getNumberOfItems + 1);
  };

  const handleMinusClick = () => {
    getNumberOfItems === 0 ? 0 : setNumberOfItems(getNumberOfItems - 1);
  };

  return (
    <div className="item-price">
      <div className="item-price__amount">
        <div className="amount" data-cy="amount">
          <div className="amount__pound">£{pounds}</div>
          <span className="amount__pence">.{pence}</span>
        </div>
        <div className="counter">
          <div className="counter__label">QTY</div>
          <div className="counter__panel">
            <div className="panel">
              <div
                className="panel__sign"
                onClick={handleMinusClick}
                data-cy="minus"
              >
                -
              </div>
              <div className="panel__number" data-cy="numberOfItems">
                {getNumberOfItems}
              </div>
              <div
                className="panel__sign"
                onClick={handlePlusClick}
                data-cy="plus"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="item-price__add-button">Add to cart</button>
    </div>
  );
};

export default ItemPrice;
