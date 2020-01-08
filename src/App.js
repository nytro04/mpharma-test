import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/main.scss";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
