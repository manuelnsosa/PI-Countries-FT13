import React from "react";
import { ContainerStyle } from "./Cards.js";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";

export function Cards({ currentPosts }) {
  return (
    <ContainerStyle>
      {currentPosts &&
        currentPosts.map((country, index) => {
          return (
            <Link
              key={country.alpha3Code}
              className="link"
              to={`/country/${country.alpha3Code}`}
              id={country.alpha3Code}
            >
              <Card country={country} />
            </Link>
          );
        })}
    </ContainerStyle>
  );
}
export default Cards;
