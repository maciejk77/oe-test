import React from 'react';
import './styles.scss';

const ItemWrapper = props => {
  return (
    <section className="item-wrapper">
      <div>{props.children}</div>
      {props.isCollapsible && <button>Show more/less</button>}
    </section>
  );
};

export default ItemWrapper;
