import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../src/containers/App";
import reducers from "./reducers";
import Favorites from '../src/components/Favorites';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path ="/" component={App}/>
        <Route exact path="/favorites" render={(props)=>(
          <Favorites {...props}/>
        )}/>
    </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
