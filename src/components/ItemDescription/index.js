import React from 'react';
import withToggle from '../ToggleHOC';
import './styles.scss';

const ItemDescription = ({ toggle, toggleState, description, size }) => {
  if (!description) {
    return null;
  }

  return (
    <div className="item-description">
      <h2 className="item-description__header">Description</h2>

      <p className="item-description__description">
        {toggleState ? description : `${description.substring(0, size)}...`}
      </p>

      <div className="item-wrapper__toggle" onClick={toggle}>
        {toggleState ? 'Show less' : 'Show more'}
      </div>
    </div>
  );
};

export default withToggle(ItemDescription);
