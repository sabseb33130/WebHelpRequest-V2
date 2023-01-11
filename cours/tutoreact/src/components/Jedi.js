import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
const Jedi = () => {
  const [heroa, setHeroa] = useState();
  const [test, setTest] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://swapi.dev/api/films`);
      const responseJson = await response.json();

      setHeroa(responseJson);
    }

    fetchData();
  }, []);

  const data = heroa?.results;
  console.log(heroa?.results);
  console.log(data);
  return (
    <div>
      <Logo />
      <Navigation />
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Jedi;
