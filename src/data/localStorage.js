class StorageAccess {
  static checkingLocalStorage = () => {
    if (typeof Storage !== "undefined") {
      return true;
    } else {
      alert("Your Browser Not Supported");
      return false;
    }
  };

  static addToLocalStorage = (data) => {
    let myPokemonList = this.fetchLocalStorage();

    myPokemonList.push(data);

    localStorage.setItem("LOCAL_POKEMON_LIST", JSON.stringify(myPokemonList));
  };

  static fetchLocalStorage = () => {
    if (this.checkingLocalStorage()) {
      if (localStorage.getItem("LOCAL_POKEMON_LIST") !== null) return JSON.parse(localStorage.getItem("LOCAL_POKEMON_LIST"));
      else return [];
    }
  };

  static deleteFromLocalStorage = (id) => {
    let myPokemonList = this.fetchLocalStorage();

    let newPokemonList = myPokemonList.filter((data) => data.nickname !== id);

    localStorage.setItem("LOCAL_POKEMON_LIST", JSON.stringify(newPokemonList));
  };
}

export default StorageAccess;
