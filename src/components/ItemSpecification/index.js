import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemSpecification = () => {
  return (
    <div className="item-specification">
      <ItemWrapper isCollapsible={true}>
        <h2>Specification</h2>
        <p>Brand Philips Item Weight 77 g</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemSpecification;
