import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import Details from './pages/details';
import store from './store';
import { BodyWarp } from './style'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <BodyWarp>
          <Router>
            <div>
              <Route exact path="/" component={Home}></Route>
              <Route path="/details" component={Details}></Route>
            </div>
          </Router>
        </BodyWarp>
      </div>
    </Provider>
  );
}

export default App;
