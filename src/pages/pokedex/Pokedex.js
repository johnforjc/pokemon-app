import React, { useState, useEffect } from "react";

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
    <div className="pokedex-content">
      {pokemonList.map((item) => (
        <div>
          <p>{capitalizeFirstLetter(item.name)}</p>
          <img src={urlImage(item.url)} />
        </div>
      ))}
      <div className="btn" onClick={changeURL} data-url={urlPrev}>
        {"<"}
      </div>
      <div className="btn" onClick={changeURL} data-url={urlNext}>
        {">"}
      </div>
    </div>
  );
};

export default Pokedex;
