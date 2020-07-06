import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { store } from "./redux/store";
import DaropDwonMenu from "./Componants/Commen/DaropDwonMenu";
import AddQustion from "./Componants/AddQuestion/Index";
import QustionDetail from "./Componants/DetailsQustion/Index";
import NotFound from "./Componants/Commen/NotFound";
import QutionsList from "./Componants/QustionList/Index";
import KithenSink from "./Componants/Commen/KithenSink";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={QutionsList} exact path="/QutionsList" />
        <Route component={DaropDwonMenu} exact path="/DaropDwonMenu" />
        <Route component={AddQustion} exact path="/AddQustion" />
        <Route component={QustionDetail} exact path="/QustionDetail/:id" />
        <Route component={KithenSink} exact path="/KithenSink" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
