import React from 'react';

const Graph = props => {
  return (
    <div className="graph">
      {props.children}
      <p>---Some data here---</p>
    </div>
  );
};

export default Graph;
