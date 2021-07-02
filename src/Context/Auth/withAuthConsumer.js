import React from "react";

import { Consumer } from "./Context";

const withAuthConsumer = (WrappedComponent) => (props) => {
  return (
    <Consumer>
      {(values) => {
        return <WrappedComponent {...props} authData={values} />;
      }}
    </Consumer>
  );
};

export default withAuthConsumer;
