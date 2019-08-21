import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './styles.scss';

const Graph = ({ graphData }) => {
  return (
    <ResponsiveContainer className="graph">
      <LineChart
        width={300}
        height={300}
        data={graphData}
        className="graph__linechart"
        margin={{ right: 40, bottom: 40 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#fd117a" dot={false} />
        <Line type="monotone" dataKey="xv" stroke="#fff" dot={false} />
        <XAxis dataKey="value" dy={10} />
        <YAxis dx={-10} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
