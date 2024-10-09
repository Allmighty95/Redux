import React from "react";

import { Provider } from "react-redux";
import { Store } from "./Store";
import CounterComponent from "./CounterComponent";

const App = () => {
  return (
    // El provider proporciona el store de Redux a toda la aplicacion
    <Provider store={Store}>
      <div className="App">
        <h1>Mi contador con Redux</h1>
        <CounterComponent />
      </div>
    </Provider>
  );
};
export default App; 
