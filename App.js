import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItemData } from './src/actions';

import Header from './src/components/Header';
import ItemInfo from './src/components/ItemInfo';
import ItemPrice from './src/components/ItemPrice';
import ItemDescription from './src/components/ItemDescription';
import ItemSpecification from './src/components/ItemSpecification';
import ItemPerformance from './src/components/ItemPerformance';
import Footer from './src/components/Footer';
import './src/styles/base_styles.scss';
import './src/styles/app.scss'; // CSS reset

// TODO
// refactor to cleaner useEffect hook, combined with stateless component
class App extends Component {
  componentDidMount() {
    this.props.getItemData();
  }

  render() {
    const {
      itemImageURL,
      itemInfo,
      itemPrice,
      description,
      specification,
      performance
    } = this.props.data;

    return (
      <div style={{ minWidth: '320px' }}>
        <Header />
        <main>
          <ItemInfo data={itemInfo} />
          <ItemPrice price={itemPrice} />
          <ItemDescription description={description} />
          <ItemSpecification specification={specification} />
          <ItemPerformance performance={performance} />
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.item };
};

export default connect(
  mapStateToProps,
  { getItemData }
)(App);
