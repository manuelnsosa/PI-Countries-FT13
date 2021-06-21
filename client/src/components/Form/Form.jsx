import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addActivity } from "../../actions";

export function Form() {
  const dispatch = useDispatch();
  var countries = useSelector((store) => store.countries);
  const [data, setData] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
    countries: "",
  });
  const handleOnChange = (e) => {
    if (e.target.type === "checkbox") {
      if (data.countries.includes(e.name)) {
      } else {
        setData({
          ...data,
          countries: data.countries + e.target.name + ",",
        });
      }
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleOnSubmit = (e) => {
    setData({
      ...data,
      countries: data.countries.slice(0, data.countries.length - 1),
    });
    e.preventDefault();
    dispatch(addActivity(data));
    /* setData({
      name: "",
      difficulty: 0,
      duration: "",
      season: "",
      countries: "",
    }); */
    let uncheck = document.querySelectorAll(".selector");
    uncheck.forEach((e) => (e.checked = false));
  };
  return (
    <div>
      <SearchBar />
      <form onSubmit={handleOnSubmit}>
        <a>Name</a>
        <input
          name="name"
          onChange={handleOnChange}
          autoComplete="off"
          placeholder={"name"}
        />
        <a>Difficulty</a>
        <input
          name="difficulty"
          onChange={handleOnChange}
          autoComplete="off"
          placeholder={"difficulty"}
        />
        <a>Duration</a>
        <input
          name="duration"
          onChange={handleOnChange}
          autoComplete="off"
          placeholder={"duration"}
        />
        <a>Season</a>
        <input
          name="season"
          onChange={handleOnChange}
          autoComplete="off"
          placeholder={"season"}
        />
      </form>
      <div>
        {countries &&
          countries.map((e, index) => {
            return (
              <div>
                <label>{e.name}</label>
                <input
                  className="selector"
                  onChange={handleOnChange}
                  type="checkbox"
                  id={e.alpha3Code}
                  name={e.name}
                />
              </div>
            );
          })}
      </div>
      <Link to="Home">
        {" "}
        <button onClick={handleOnSubmit}>ADD ACTIVITY</button>{" "}
      </Link>
    </div>
  );
}

export default Form;
