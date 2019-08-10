import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './src/components/NavBar';
import ItemInfo from './src/components/ItemInfo';
import Graph from './src/components/Graph';
import Footer from './src/components/Footer';
import './src/styles/base_styles.scss';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemInfo />
      <ItemInfo />
      <Graph />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
