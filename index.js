import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar';
import ItemInfo from './components/ItemInfo';
import Graph from './components/Graph';
import Footer from './components/Footer';

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
