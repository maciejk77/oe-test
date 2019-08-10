import React from 'react';

const ItemInfoWrapper = props => {
  return (
    <section className="item-info">
      <div>{props.children}</div>
      {props.isCollapsible && <button>Show more/less</button>}
    </section>
  );
};

export default ItemInfoWrapper;
