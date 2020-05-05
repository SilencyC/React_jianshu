import React from "react";
import { Provider } from "react-redux";
import Header from "./common/header";
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
    </Provider>
  );
}

export default App;
