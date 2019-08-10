import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemPerformance = () => {
  return (
    <div className="item-performance">
      <ItemWrapper isCollapsible={false}>
        <h2>Performance</h2>
        <p>---graph here---</p>
      </ItemWrapper>
    </div>
  );
};

export default ItemPerformance;
