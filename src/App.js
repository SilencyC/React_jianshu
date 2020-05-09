import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './common/header';
import Home from './pages/home';
import Details from './pages/details';
import Login from './pages/login';
import store from './store';
import { BodyWarp } from './style';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <BodyWarp>
            <Route exact path="/" component={Home}></Route>
            <Route path="/details/:id" component={Details}></Route>
            <Route path="/login" component={Login}></Route>
          </BodyWarp>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
