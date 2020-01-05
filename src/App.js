import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

// Component imports

import HomePage from "./pages/homePage/homePage";
import playerInfoPage from "./pages/playerInfoPage/playerInfoPage";

// Data imports

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/player/:summoner_name" component={playerInfoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
