import * as React from 'karet';
import ReactDOM from 'react-dom';

import Main from './Main';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

import { mkStore } from './core/store';
import * as Default from './defaults';

const store = mkStore(Default.initialState, Default.storageKey);

ReactDOM.render(
  <Main {...{ store }} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
