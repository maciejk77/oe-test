import React from 'react';
import '../ItemInfoWrapper';
const ItemInfo = props => {
  return (
    <section className="item-info">
      <div>{props.children}</div>
      {props.isCollapsible && <button>Show more/less</button>}
    </section>
  );
};

export default ItemInfo;
