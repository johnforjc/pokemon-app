import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Pokedex from "./pages/pokedex/Pokedex";
import Mypokedex from "./pages/mypokedex/Mypokedex";

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
            <Route path="/mypokemon">
              <Mypokedex />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
