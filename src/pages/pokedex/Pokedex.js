import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pokedex.css";
import StorageAccess from "../../data/localStorage";

const Pokedex = () => {
  const [urlList, setUrlList] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [urlNext, seturlNext] = useState();
  const [urlPrev, seturlPrev] = useState();
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonCount, setpokemonCount] = useState(0);

  function fetchAPI() {
    fetch(urlList)
      .then((response) => response.json())
      .then((responseJson) => {
        setPokemonList(responseJson.results);
        seturlNext(responseJson.next);
        seturlPrev(responseJson.previous);
      });
  }

  useEffect(() => {
    fetchAPI();
    setpokemonCount(StorageAccess.getPokemonCount());
    return;
  }, [urlList]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function urlImage(urlDetail) {
    let newUrl = urlDetail.slice(0, -1);
    let id = newUrl.slice(newUrl.lastIndexOf("/") + 1);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  function changeURL(event) {
    if (event.target.dataset.url) {
      setUrlList(event.target.dataset.url);
    } else {
      alert("You can go anymore");
    }
  }

  return (
    <div className="pokedex-box">
      <div className="pokedex-box-content">
        <h2>Pokemon List</h2>

        <div className="info-inventory">
          <Link to="/pokemon-app/mypokemon">
            <p>
              <small>Your pokemon: {pokemonCount}</small>
            </p>
          </Link>
        </div>

        {/* <div className="pokedex-content">
          {pokemonList.map((item) => (
            <Link to={`/pokemon-app/detail/${item.name}`} key={item.name}>
              <div className="pokemon-box">
                <div className="pokemon-card">
                  <div className="image-box">
                    <img src={urlImage(item.url)} />
                  </div>
                  <div className="pokemon-name">
                    <h3>{capitalizeFirstLetter(item.name)}</h3>
                  </div>
                  <div className="go">
                    <h4>{">"}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        <div className="mypokedex-content">
          {pokemonList.map((item) => (
            <div className="mypokedex-card-box" key={item.name}>
              <div
                className="pokeball"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + "/pokeball.png"})`,
                  opacity: "0.15",
                }}
              ></div>

              <Link to={`/pokemon-app/detail/${item.name}`}>
                <div className="mypokedex-card">
                  <div className="mypokedex-img">
                    <img src={urlImage(item.url)} />
                  </div>

                  <div className="pokedex-info">
                    <h3>{capitalizeFirstLetter(item.name)}</h3>
                  </div>

                  <div className="btn go">{">"}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="btn-group">
          <div className="btn btn-pagination" onClick={changeURL} data-url={urlPrev}>
            {"<"}
          </div>
          <div className="btn btn-pagination" onClick={changeURL} data-url={urlNext}>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
