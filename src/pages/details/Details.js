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

        console.log(heldItemArr);
        console.log(abilityArr);

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
      });
  }

  useEffect(() => {
    fetchPokemonDataFromAPI();
  }, []);

  return (
    <div className="detail-box">
      {/* <div className="tab">
        <div className="tab-content">Base Stat</div>
        <div className="tab-content">Ability</div>
      </div> */}
      {pokemon}
      <img src={imageUrl} alt={pokemon} />
      <Type type="normal" />
      <Table data={dataPokemon} />

      {baseStat.map((item, index) => (
        <ChartBar key={index} baseStat={item} />
      ))}
      {/* <div className="table">
        <div className="table-column">
          <div className="table-row title">Height</div>
          <div className="table-row content">0.7m</div>
        </div>
        <div className="table-column">
          <div className="table-row title">Weight</div>
          <div className="table-row content">6.9kg</div>
        </div>
        <div className="table-column">
          <div className="table-row title">Held Items</div>
          <div className="table-row content">Not Found</div>
        </div>
        <div className="table-column">
          <div className="table-row title">Ability</div>
          <div className="table-row content">Overgrow, Chlorophyll, hahhaha</div>
        </div>
      </div> */}
    </div>
  );
};

export default Details;
