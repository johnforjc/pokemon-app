import React, { useEffect, useState } from "react";
import StorageAccess from "../../data/localStorage";
import "./Mypokedex.css";

const Mypokedex = () => {
  const [myPokemonList, setmyPokemonList] = useState(StorageAccess.fetchLocalStorage());

  const refreshPokemon = () => {
    setmyPokemonList(StorageAccess.fetchLocalStorage());
  };

  useEffect(() => {
    refreshPokemon();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const releaseHandler = (event) => {
    let nickname = event.target.dataset.id;
    console.log(nickname);

    StorageAccess.deleteFromLocalStorage(nickname);
    refreshPokemon();
  };

  return (
    <div className="mypokedex-box">
      <h2>My Pokemon</h2>
      <div className="mypokedex-content">
        {myPokemonList.map((item) => (
          <div className="mypokedex-card-box" key={item.nickname}>
            <div className="mypokedex-card">
              <div className="mypokedex-img">
                <img src={item.urlImage} />
              </div>

              <div className="mypokedex-info">
                <h3>{capitalizeFirstLetter(item.pokemon)}</h3>
                <p>{capitalizeFirstLetter(item.nickname)}</p>
              </div>

              <div className="btn btn-release" onClick={releaseHandler} data-id={item.nickname}>
                Release
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mypokedex;
