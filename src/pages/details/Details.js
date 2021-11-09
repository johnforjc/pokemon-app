import React, { useEffect, useState } from "react";
import "./Details.css";
import Table from "./../../component/Table/Table";
import Type from "../../component/Type/Type";
import ChartBar from "../../component/chart-bar/ChartBar";
import { useParams } from "react-router";

const Details = () => {
  let { pokemon } = useParams();
  const urlPokemonData = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  const [dataPokemon, setDataPokemon] = useState([]);
  const [baseStat, setBaseStat] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [dataTypePokemon, setdataTypePokemon] = useState([]);

  const catchHandler = () => {
    let a = Math.floor(Math.random() * 100);
    if (a % 2) alert("Succesfully catch");
    else alert("Pokemon gone");
  };

  function fetchPokemonDataFromAPI() {
    fetch(urlPokemonData)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
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
      {pokemon}
      <img src={imageUrl} alt={pokemon} />
      <div className="btn" onClick={catchHandler}>
        Catch Now
      </div>

      <div className="type-box">
        {dataTypePokemon.map((item, index) => (
          <Type type={item} key={index} />
        ))}
      </div>

      <Table data={dataPokemon} />

      {baseStat.map((item, index) => (
        <ChartBar key={index} baseStat={item} />
      ))}
    </div>
  );
};

export default Details;
