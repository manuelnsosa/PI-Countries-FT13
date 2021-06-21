import React from "react";
import { Link } from "react-router-dom";
import { getAllCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { LandingStyle } from "./Landing.js";

export function Landing() {
  const dispatch = useDispatch();

  const countries = useSelector((store) => store.countries);
  const callBackEnd = () =>
    dispatch(getAllCountries(["DESC", "area"], "first"));
  if (countries.length < 10) {
    callBackEnd();
    console.log("done");
  }
  return (
    <LandingStyle>
      <h2 className="stringStyle">
        You're in Landing page. Click 'Home' to see the countries
      </h2>
      <Link to="/home" className="link">
        <button onClick={console.log("entré al home")}>HOME</button>
      </Link>
    </LandingStyle>
  );
}

export default Landing;
