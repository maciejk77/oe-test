import React from 'react';
import withToggle from '../ToggleHOC';
import './styles.scss';

const ItemSpecification = ({
  toggle,
  toggleState,
  specification,
  additionalSpecification
}) => {
  if (!specification) {
    return null;
  }
  if (!additionalSpecification) {
    return null;
  }

  return (
    <div className="item-specification">
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
      {toggleState && (
        <ul className="item-specification__additionalSpecification">
          {additionalSpecification.map((addSpec, i) => {
            return (
              <li className="list-item" key={i}>
                {addSpec}
              </li>
            );
          })}
        </ul>
      )}

      {/* this could be extracted to separate atom serving this and ItemDescription, 
      components also refactored to atoms/moclecules/organisms folder structure? */}
      <div className="item-specification__toggle" onClick={toggle}>
        {toggleState ? 'Show less' : 'Show more'}
      </div>
    </div>
  );
};

export default withToggle(ItemSpecification);
