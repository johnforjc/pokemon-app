import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pokedex.css";

const Pokedex = () => {
  const [urlList, setUrlList] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [urlNext, seturlNext] = useState();
  const [urlPrev, seturlPrev] = useState();
  const [pokemonList, setPokemonList] = useState([]);

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
      <h2>Pokemon List</h2>

      <div className="info-inventory">
        <Link to="/pokemon-app/mypokemon">
          <p>
            <small>Your pokemon: 20</small>
          </p>
        </Link>
      </div>
      <div className="pokedex-content">
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
      </div>

      <div className="btn-group">
        <div className="btn-pagination" onClick={changeURL} data-url={urlPrev}>
          {"<"}
        </div>
        <div className="btn-pagination" onClick={changeURL} data-url={urlNext}>
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
