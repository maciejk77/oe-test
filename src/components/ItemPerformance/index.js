import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemPerformance = ({ performance }) => {
  return (
    <div className="item-performance">
      <ItemWrapper isCollapsible={false}>
        <h2>Performance</h2>
        <p>{performance}</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemPerformance;
