import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItemData } from '../../actions';

import Header from '../Header';
import ItemInfo from '../ItemInfo';
import ItemPrice from '../ItemPrice';
import ItemDescription from '../ItemDescription';
import ItemSpecification from '../ItemSpecification';
import ItemPerformance from '../ItemPerformance';
import Footer from '../Footer';
import withToggle from '../ToggleHOC';
import '../../styles/base_styles.scss';
import './styles.scss';

const WrappedItemDescription = withToggle(ItemDescription);
const WrappedItemSpecification = withToggle(ItemSpecification);

// TODO
// refactor to cleaner useEffect hook, combined with stateless component?

class App extends Component {
  componentDidMount() {
    this.props.getItemData();
  }

  render() {
    const {
      itemInfo,
      itemPrice,
      description,
      specification,
      additionalSpecification,
      performance
    } = this.props.data;

    return (
      <div style={{ minWidth: '320px' }}>
        <Header />
        <main>
          <ItemInfo data={itemInfo} />
          <ItemPrice price={itemPrice} />
          <WrappedItemDescription description={description} size={147} />
          <WrappedItemSpecification
            specification={specification}
            additionalSpecification={additionalSpecification}
          />
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
