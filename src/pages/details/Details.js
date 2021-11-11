import React, { useEffect, useState } from "react";
import "./Details.css";
import Table from "./../../component/Table/Table";
import Type from "../../component/Type/Type";
import ChartBar from "../../component/chart-bar/ChartBar";
import { useParams } from "react-router";
import StorageAccess from "../../data/localStorage";

const Details = () => {
  let { pokemon } = useParams();
  const urlPokemonData = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

  const [dataPokemon, setDataPokemon] = useState([]);
  const [baseStat, setBaseStat] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [dataTypePokemon, setdataTypePokemon] = useState([]);
  const [dataMove, setDataMove] = useState([]);

  const [isCatched, setisCatched] = useState(false);
  const [isGone, setisGone] = useState(false);
  const [nickname, setnickname] = useState("");
  const [isUsedNickname, setisUsedNickname] = useState(false);
  const [isTooLong, setisTooLong] = useState(false);

  const catchHandler = () => {
    let a = Math.floor(Math.random() * 100);
    if (a % 2 == 0) setisCatched(true);
    else setisGone(true);
  };

  const changeInputHandler = (event) => {
    setnickname(event.target.value);
  };

  const releaseHandler = () => {
    setisCatched(false);
  };

  const closeAlertTooLong = () => {
    setisTooLong(false);
  };

  const closeAlert = () => {
    setisGone(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nickname.length >= 8) {
      setisTooLong(true);
      return;
    }

    let dataInputJson = {
      nickname: nickname,
      pokemon: pokemon,
      urlImage: imageUrl,
    };

    let isUsed = StorageAccess.addToLocalStorage(dataInputJson);

    if (isUsed) {
      setisUsedNickname(true);
      return;
    }

    setisCatched(false);
  };

  const resubmitHandler = () => {
    setisUsedNickname(false);
  };

  function fetchPokemonDataFromAPI() {
    fetch(urlPokemonData)
      .then((response) => response.json())
      .then((responseJson) => {
        setImageUrl(responseJson.sprites.front_default);

        // Ekstrak base stat dari response API
        let statArr = [];
        let stat = ["HP", "Attack", "Defense", "Sp. Att", "Sp. Def", "Speed"];
        for (let i = 0; i < stat.length; i++) {
          statArr.push({
            header: stat[i],
            data: responseJson.stats[i].base_stat,
          });
        }
        setBaseStat(statArr);

        // Ekstrak heldItem data
        let heldItemArr = "";
        if (responseJson.held_items.length === 0) heldItemArr = "No held items";
        else {
          for (let i = 0; i < responseJson.held_items.length; i++) {
            if (i != 0) heldItemArr += ", ";
            heldItemArr += responseJson.held_items[i].item.name.replace(/-/g, " ");
          }
        }

        // Ekstrak ability
        let abilityArr = "";
        if (responseJson.abilities.length === 0) abilityArr = "No ability found";
        else {
          for (let i = 0; i < responseJson.abilities.length; i++) {
            if (i != 0) abilityArr += ", ";
            abilityArr += responseJson.abilities[i].ability.name.replace(/-/g, " ");
          }
        }

        let moveArr = [];
        if (responseJson.moves.length === 0) abilityArr = "No ability found";
        else {
          for (let i = 0; i < responseJson.moves.length; i++) {
            moveArr.push(responseJson.moves[i].move.name.replace(/-/g, " "));
          }
        }

        setDataMove(moveArr);

        const data = [
          {
            header: "Height",
            content: `${responseJson.height / 10}m`,
          },
          {
            header: "Weight",
            content: `${responseJson.weight / 10}kg`,
          },
          {
            header: "Held Items",
            content: heldItemArr,
          },
          {
            header: "Ability",
            content: abilityArr,
          },
        ];

        setDataPokemon(data);

        // Ekstrak pokemon type
        let typePokemon = [];
        for (let i = 0; i < responseJson.types.length; i++) {
          typePokemon.push(responseJson.types[i].type.name);
        }

        setdataTypePokemon(typePokemon);
      });
  }

  useEffect(() => {
    fetchPokemonDataFromAPI();
  }, []);

  return (
    <div className="detail-box">
      {isCatched && isTooLong && (
        <div className="alert">
          <p>Name must be less than 9 character</p>
          <div className="btn btn-resubmit" onClick={closeAlertTooLong}>
            Close
          </div>
        </div>
      )}

      {isGone && (
        <div className="alert">
          <p>Pokemon has gone</p>
          <div className="btn btn-resubmit" onClick={closeAlert}>
            Close
          </div>
        </div>
      )}

      {isCatched && isUsedNickname && (
        <div className="alert alert-used">
          <p>Name has been used.</p>
          <div className="btn btn-resubmit" onClick={resubmitHandler}>
            Close
          </div>
        </div>
      )}

      {isCatched && !isUsedNickname && !isTooLong && (
        <div className="alert form-nickname-input">
          <h4>Pokemon Catched</h4>
          <form action="" onSubmit={submitHandler}>
            <input type="text" name="nickname" id="nickname" placeholder="Give nickname" onChange={changeInputHandler} />
            <div className="button-group">
              <div className="btn btn-release" onClick={releaseHandler}>
                Release
              </div>
              <button type="submit" id="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="detail-header">
        <h2 className="pokemon-name">{pokemon}</h2>
        <div className="type-box">
          {dataTypePokemon.map((item, index) => (
            <Type type={item} key={index} />
          ))}
        </div>
      </div>
      <div className="detail-img">
        <img src={imageUrl} alt={pokemon} />
      </div>
      <div className="btn-catch" onClick={catchHandler}>
        Catch Now
      </div>

      <div className="detail-content-box">
        <div
          className="detail-pokeball"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/pokeball.png"})`,
          }}
        ></div>

        <div
          className="detail-pokeball"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/pokeball.png"})`,
          }}
        ></div>
        <div className="divider"></div>
        <div className="detail-info-box">
          <div className="detail-content">
            <h2>Overview</h2>
            <Table data={dataPokemon} />
          </div>

          <div className="detail-content">
            <h2>Base Stat</h2>
            {baseStat.map((item, index) => (
              <ChartBar key={index} baseStat={item} />
            ))}
          </div>
        </div>

        <div className="move-content-box">
          <h2>Move Set</h2>
          <div className="move-content">
            {dataMove.map((item, index) => (
              <div className="move-box" key={index}>
                <small>{item}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
