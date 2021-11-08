import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Pokedex from "./pages/pokedex/Pokedex";

function App() {
  // const [urlDetail, seturlDetail] = useState("");

  // const setUrl = (url) => {
  //   seturlDetail(url);
  //   console.log(url);
  // };

  return (
    <div className="App">
      <Header />
      <Router>
        <main>
          <Switch>
            <Route exact path="/">
              {/* <Pokedex setUrlDetail={setUrl} /> */}
              <Pokedex />
            </Route>
            <Route path="/detail/:pokemon">
              <Details />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
