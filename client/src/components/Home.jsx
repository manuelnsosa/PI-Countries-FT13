import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../actions/index.js";
import SearchBar from "./SearchBar/SearchBar";

export function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries);
  const country = useSelector((store) => store.country);
  console.log(country);

  if (country.name) {
    return (
      <div id={country.alpha3Code}>
        <SearchBar />
        <div>
          <h2>{country.name}</h2>
        </div>
      </div>
    );
  }

  return (
    <div key="home">
      <SearchBar />
      <h1>You're in Home component</h1>

      {countries &&
        countries.map((e, index) => {
          return (
            <div key={index}>
              <h2>{e.name}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
