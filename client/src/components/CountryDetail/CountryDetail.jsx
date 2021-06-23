import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../../actions/index";
import ScrollButton from "../ScrollButton/ScrollButton.jsx";
import { StyledCountryDetail } from "./CountryDetail";

export function CountryDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((store) => store.country);
  const countries = useSelector((store) => store.countries);
  let activities = [];
  console.log(country);
  useEffect(() => {
    if (country) {
      dispatch(getCountryDetail(id));
    }
    id = "";
  }, [dispatch, id]);
  return (
    <StyledCountryDetail>
      <div className="card">
        <h1 className="txtName">{country.name}</h1>
        <img className="img" src={country.image} alt="Image not found" />
        <h2 className="txt">Code: {country.alpha3Code}</h2>
        <h2 className="txt">Capital: {country.capital}</h2>
        <h2 className="txt">Region: {country.region}</h2>
        <h2 className="txt">Subregion: {country.subregion}</h2>
        <h2 className="txt">Area: {country.area} km²</h2>
        <h2 className="txt">Population: {country.population}</h2>
        <h2 className="txt2">Activities:</h2>
        {console.log(country.activities)}
        <div className="actDiv">
          {country.activities &&
            country.activities.map((e) => {
              console.log(e);
              return (
                <div className="act">
                  <h2 className="txt">{e.name}</h2>
                  <h2 className="txt">Difficulty: {e.difficulty}</h2>
                  <h2 className="txt">Duration: {e.duration}</h2>
                  <h2 className="txt">Season: {e.season}</h2>
                </div>
              );
            })}
        </div>
      </div>

      <ScrollButton />
    </StyledCountryDetail>
  );
}

export default CountryDetail;
