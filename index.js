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
      <ItemInfo isCollapsible={false}>
        <p>Energy saving light bulb</p>
        <p>25 W // Package of 4</p>
      </ItemInfo>
      <ItemInfo isCollapsible={false}>
        <p>£12.99</p>
        <button>Add to cart</button>
      </ItemInfo>
      <ItemInfo isCollapsible={true}>
        <label>Description</label>
        <p>
          Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb
          switches on instantly, no wiaint around warm start and ficker free
          features...
        </p>
      </ItemInfo>
      <ItemInfo isCollapsible={true}>
        <label>Specification</label>
        <p>Brand Philips Item Weight 77 g</p>
      </ItemInfo>
      <Graph>
        <label>Performance</label>
      </Graph>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
