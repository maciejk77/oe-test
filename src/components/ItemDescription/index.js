import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemDescription = () => {
  return (
    <div className="item-description">
      <ItemWrapper isCollapsible={true}>
        <h2>Description</h2>
        <p>
          Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb
          switches on instantly, no wiaint around warm start and ficker free
          features...
        </p>
      </ItemWrapper>
    </div>
  );
};

export default ItemDescription;
