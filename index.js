import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/Header';
import ItemInfo from './src/components/ItemInfo';
import Graph from './src/components/Graph';
import Footer from './src/components/Footer';
import './src/styles/base_styles.scss';
import Foo from './src/components/ItemInfoWrapper';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <ItemInfo isCollapsible={false}>
          <h1>Energy saving light bulb</h1>
          <p>25 W // Package of 4</p>
        </ItemInfo>
        <ItemInfo isCollapsible={false}>
          <p>£12.99</p>
          <button>Add to cart</button>
        </ItemInfo>
        <ItemInfo isCollapsible={true}>
          <h2>Description</h2>
          <p>
            Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22,
            bulb switches on instantly, no wiaint around warm start and ficker
            free features...
          </p>
        </ItemInfo>
        <ItemInfo isCollapsible={true}>
          <h2>Specification</h2>
          <p>Brand Philips Item Weight 77 g</p>
        </ItemInfo>
        <Graph>
          <h2>Performance</h2>
        </Graph>
      </main>
      <Footer />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
