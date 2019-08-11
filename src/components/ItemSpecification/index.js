import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemSpecification = ({ specification }) => {
  return (
    <div className="item-specification">
      <ItemWrapper isCollapsible={true}>
        <h2>Specification</h2>
        <p>{specification}</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemSpecification;
