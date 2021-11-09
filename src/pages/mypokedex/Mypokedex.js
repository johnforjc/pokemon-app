import React, { useEffect, useState } from "react";
import StorageAccess from "../../data/localStorage";

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
    <div>
      {myPokemonList.map((item) => (
        <div className="mypokedex-card" key={item.nickname}>
          <p>{capitalizeFirstLetter(item.pokemon)}</p>
          <p>{capitalizeFirstLetter(item.nickname)}</p>
          <img src={item.urlImage} />

          <div className="btn-release" onClick={releaseHandler} data-id={item.nickname}>
            Release
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mypokedex;
