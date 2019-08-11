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
import './src/styles/app.scss'; // CSS reset

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <ItemInfo data={data.itemInfo} />
        <ItemPrice data={data.itemPrice} />
        <ItemDescription data={data.description} />
        <ItemSpecification data={data.specification} />
        <ItemPerformance data={data.performance} />
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
