import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

export function Starwars() {
  const [hero, setHero] = useState();
  const [chiffre, setChiffre] = useState();
  useEffect(() => {
    const nombre = Math.floor(Math.random(1) * 83);
    async function fetchData() {
      const response = await fetch(`https://swapi.dev/api/people/${nombre}`);
      const responseJson = await response.json();

      setHero(responseJson);
      setChiffre(nombre);
    }

    fetchData();
  }, []);
  console.log(hero);
  const Champion = hero?.name;
  const planete = hero?.homeworld.split("/")[5];
  const species = hero?.species[0]
    ? hero?.species[0].toString().split("/")[5]
    : hero?.name;
  console.log(planete);
  console.log(species);
  const film = hero?.films.map((elm, i) => (
    <a href={elm} key={i}>
      <li elm={hero?.films}>les films dans lesquels apparait ce personnage</li>
    </a>
  ));
  console.log(film);

  return (
    <div className="fond">
      <Logo />
      <Navigation />
      <div className="container mx-auto">
        <div className="row">
          <div className="col">
            <img src={`./people/${chiffre}.jpg`} alt={hero?.name} />
          </div>
          <div className=" col infos">
            <h1 className="text-center">{Champion}</h1>
            <h2>date de naissance {hero?.birth_year}</h2>
            <h4>Taille:{hero?.height} cm</h4>
            <h4>Poids:{hero?.mass} Kilos</h4>
            <p>Genre: {hero?.gender}</p>
            <img src={`./planets/${planete}.jpg`} alt="Pas de planête" />
            <img src={`./species/${species}.jpg`} alt="Pas d'image d'espèce" />
            <ul>{film}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Starwars;
