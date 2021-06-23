import React from "react";
import { Link } from "react-router-dom";
import { getAllCountries } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { LandingStyle } from "./Landing.js";
import background from "./img/background.gif";

export function Landing() {
  const dispatch = useDispatch();

  const countries = useSelector((store) => store.countries);
  const callBackEnd = () =>
    dispatch(getAllCountries(["DESC", "capital"], "first"));
  if (countries.length < 10) {
    callBackEnd();
    console.log("done");
  }
  return (
    <LandingStyle
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1 className="stringStyle">COUNTRYDATA APP </h1>
      <h2>Welcome!</h2>
      <Link to="/home" className="link">
        <button className="btn">HOME</button>
      </Link>
    </LandingStyle>
  );
}

export default Landing;
