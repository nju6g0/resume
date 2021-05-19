import React from "react";

import { Consumer } from "./Context";

const withPopWindowConsumer = (WrappedComponent) => (props) => {
  return (
    <Consumer>
      {(values) => {
        return <WrappedComponent {...props} popWindowData={values} />;
      }}
    </Consumer>
  );
};

export default withPopWindowConsumer;
