import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './src/components/Header';
import ItemInfo from './src/components/ItemInfo';
import ItemPrice from './src/components/ItemPrice';
import ItemDescription from './src/components/ItemDescription';
import ItemSpecification from './src/components/ItemSpecification';
import ItemPerformance from './src/components/ItemPerformance';
import Footer from './src/components/Footer';
import './src/styles/base_styles.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <ItemInfo />
        <ItemPrice />
        <ItemDescription />
        <ItemSpecification />
        <ItemPerformance />
      </main>
      <Footer />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
