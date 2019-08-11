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
              <tbody key={spec.key}>
                <tr className="table-row">
                  <td>{spec.key}</td>
                  <td>{spec.value}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </ItemWrapper>
    </div>
  );
};

export default ItemSpecification;
