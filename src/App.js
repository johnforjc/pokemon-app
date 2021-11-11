import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Pokedex from "./pages/pokedex/Pokedex";
import Mypokedex from "./pages/mypokedex/Mypokedex";
import React, { useState } from "react";

function App() {
  const [isLoading, setisLoading] = useState(false);

  const toogleLoadingHandler = () => {
    setisLoading(!isLoading);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/pokemon-app">
              {/* <Pokedex setUrlDetail={setUrl} /> */}
              <Pokedex loading={toogleLoadingHandler} />
            </Route>
            <Route path="/pokemon-app/detail/:pokemon">
              <Details loading={toogleLoadingHandler} />
            </Route>
            <Route path="/pokemon-app/mypokemon">
              <Mypokedex loading={toogleLoadingHandler} />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
