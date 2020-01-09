import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/main.scss";
import Navbar from "./components/Navbar";
import ProductList from "./components/products/ProductList";
import ProductCreate from "./components/products/ProductCreate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/product/new" component={ProductCreate} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
