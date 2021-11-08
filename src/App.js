import "./App.css";
import Header from "./component/Header/Header";
import Details from "./pages/details/Details";
import Pokedex from "./pages/pokedex/Pokedex";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Pokedex />
      </main>
    </div>
  );
}

export default App;
