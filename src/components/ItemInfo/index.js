import React from 'react';

const ItemInfo = props => {
  return (
    <div className="item-info">
      <div>{props.children}</div>
      {props.isCollapsible && <button>Show more/less</button>}
    </div>
  );
};

export default ItemInfo;
