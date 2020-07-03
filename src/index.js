import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { store } from './redux/store'
import Kitchensink from './screens/kitchensink'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './screens/main';
import DaropDwonMenu from "./Componants/Commen/DaropDwonMenu";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={Kitchensink} exact path="/sink" />

      <Route component={Main} exact path="/" />
      {/* <Route component={App} path="/" /> */}
      <Route component={DaropDwonMenu} path="/DaropDwonMenu" />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
