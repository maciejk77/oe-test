import React from 'react';
import ItemWrapper from '../ItemWrapper';
import './styles.scss';

const ItemSpecification = ({ specification }) => {
  if (!specification) {
    return null;
  }
  return (
    <div className="item-specification">
      <ItemWrapper isCollapsible={true}>
        <h2 className="item-specification__header">Specification</h2>
        <table className="item-specification__specification">
          {specification.map(spec => {
            return (
              <tr className="table-row" key={spec.key}>
                <td>{spec.key}</td>
                <td>{spec.value}</td>
              </tr>
            );
          })}
        </table>
      </ItemWrapper>
    </div>
  );
};

export default ItemSpecification;
