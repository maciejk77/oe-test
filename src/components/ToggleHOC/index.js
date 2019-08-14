import React from 'react';

const withToggle = PassedComponent =>
  class WithToggle extends React.Component {
    constructor() {
      super();
      this.state = {
        toggleState: false
      };
    }

    render() {
      const { toggleState } = this.state;

      const toggle = () => {
        this.setState({
          toggleState: !toggleState
        });
      };

      return (
        <PassedComponent
          {...this.props}
          toggle={toggle}
          toggleState={toggleState}
        />
      );
    }
  };

export default withToggle;

// ===========================================================
// I cannot get it to work as functional component with hooks
// ===========================================================

// import React, { useState } from 'react';
// const withToggle = PassedComponent => {
//   const [toggleState, setToggleState] = useState(true);
//   const toggle = () => {
//     setToggleState(!toggleState);
//   };
//   return (
//     <PassedComponent
//       {...this.props}
//       toggle={toggle}
//       toggleStatus={toggleState}
//     />
//   );
// };
