import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemDescription = ({ description }) => {
  return (
    <div className="item-description">
      <ItemWrapper isCollapsible={true}>
        <h2 className="item-description__header">Description</h2>
        <p className="item-description__description">{description}</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemDescription;
