import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import Details from './pages/details';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/details" component={Details}></Route>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
