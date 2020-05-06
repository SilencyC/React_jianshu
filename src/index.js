import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js';
import { GlobalFontStyle } from '../src/statics/iconfont/iconfont';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <GlobalFontStyle />
    <App />
  </div>,
  document.getElementById('root')
);
