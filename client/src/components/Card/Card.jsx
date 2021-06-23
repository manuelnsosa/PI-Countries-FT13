import React from "react";
import { CardStyle } from "./Card.js";

export function Card({ country }) {
  console.log(country);
  return (
    <CardStyle key={country.name}>
      <div className="containerimg">
        <img className="flag" src={country.image} alt="Couldn't load" />
      </div>
      <h2 className="text">{country.name}</h2>
      <h3 className="textcontinent">{country.region}</h3>
    </CardStyle>
  );
}

export default Card;
