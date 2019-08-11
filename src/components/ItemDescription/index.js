import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemDescription = ({ description }) => {
  return (
    <div className="item-description">
      <ItemWrapper isCollapsible={true}>
        <h2>Description</h2>
        <p>{description}</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemDescription;
