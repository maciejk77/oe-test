import React from 'react';
import './styles.scss';
import Graph from '../Graph';
// import graph from '../../assets/graph.png';

const ItemPerformance = ({ performance, graphData }) => {
  return (
    <div className="item-performance">
      <h2 className="item-performance__header">{performance}</h2>
      {/* <img className="item-performance__graph" src={graph} />  */}
      <Graph graphData={graphData} />
    </div>
  );
};

export default ItemPerformance;
