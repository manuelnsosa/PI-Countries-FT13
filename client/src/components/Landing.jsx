import React from "react";
import { Link } from "react-router-dom";
import { getAllCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Landing() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries);
  return (
    <div>
      <h2>You're in Landing page. Click 'Home' to see the countries</h2>
      <Link to="/home" className="link">
        <button onClick={() => dispatch(getAllCountries(["DESC", "area", ""]))}>
          HOME
        </button>
      </Link>
    </div>
  );
}
