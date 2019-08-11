import React, { Fragment, useState } from 'react';
import './styles.scss';

const ItemWrapper = props => {
  const [panelState, setPanelState] = useState(true);

  const handleClick = () => {
    setPanelState(!panelState);
  };

  return (
    <section className={`item-wrapper ${panelState ? ' close' : ' open'}`}>
      <Fragment>{props.children}</Fragment>
      {props.isCollapsible && (
        <div className="item-wrapper__toggle" onClick={handleClick}>
          {panelState ? 'Show more' : 'Show less'}
        </div>
      )}
    </section>
  );
};

export default ItemWrapper;
