import React from 'react';
import './styles.scss';
import graph from '../../assets/graph.png';

//import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
// below is a copy from Recharts website - idea is to implement chart
// XY axis data for the chart will be added to in data.json

const ItemPerformance = ({ performance }) => {
  return (
    <div className="item-performance">
      <h2 className="item-performance__header">{performance}</h2>
      <img className="item-performance__graph" src={graph} />
      {/* <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart> */}
    </div>
  );
};

export default ItemPerformance;
