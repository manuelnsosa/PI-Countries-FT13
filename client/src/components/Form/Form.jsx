import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addActivity } from "../../actions";
import { FormStyle } from "./Form.js";
import Filter from "../Filtering/Filtering.jsx";
import ScrollButton from "../ScrollButton/ScrollButton.jsx";

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
  const [errors, setErrors] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "You must choose a season",
  });
  let error = "";
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    switch (name) {
      case "name":
        error =
          typeof value === "string" && value.length < 4
            ? "Name must have at least 4 characters"
            : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "difficulty":
        error =
          value >= 0 && value <= 5
            ? ""
            : "Difficulty must be an integer between 0 and 5";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "duration":
        error =
          typeof value === "string" && value.length >= 4
            ? ""
            : "Duration must have at least 4 characters";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      case "season":
        error = value === "" ? "You must choose a season" : "";
        setErrors({
          ...errors,
          [name]: error,
        });
        break;
      default:
        break;
    }

    if (e.target.type === "checkbox") {
      if (data.countries.includes(e.name)) {
      } else {
        setData({
          ...data,
          countries: data.countries + name + " , ",
        });
      }
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };
  const handleOnSubmit = (e) => {
    let countriesToAdd = data.countries.slice(0, data.countries.length - 1);

    setData({
      ...data,
      countries: countriesToAdd,
    });

    dispatch(addActivity(data));
    let uncheck = document.querySelectorAll(".selector");
    uncheck.forEach((e) => (e.checked = false));
    e.preventDefault();
  };
  return (
    <FormStyle>
      <SearchBar />
      <Filter />
      <form className="divform" onSubmit={handleOnSubmit}>
        <div className="formdivs">
          <button className="ha">Name: </button>
          <input
            className="input"
            name="name"
            onChange={handleOnChange}
            autoComplete="off"
            placeholder={"What's the activity's name?"}
            required
          />
          {!errors.name ? null : <div>{errors.name}</div>}
        </div>

        <div className="formdivs">
          <button className="ha">Difficulty: </button>
          <input
            className="input"
            name="difficulty"
            onChange={handleOnChange}
            autoComplete="off"
            placeholder={"Complete the difficulty (0-5)"}
            required
          />
          {!errors.difficulty ? null : <div>{errors.difficulty}</div>}
        </div>
        <div className="formdivs">
          <button className="ha">Duration: </button>
          <input
            className="input"
            name="duration"
            onChange={handleOnChange}
            autoComplete="off"
            placeholder={"Complete the duration"}
            required
          />
          {!errors.duration ? null : <div>{errors.duration}</div>}
        </div>
        <div className="formdivs">
          <select
            name="season"
            className="selectseason"
            onChange={(e) => handleOnChange(e)}
          >
            <option value="">Season</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
          {!errors.season ? null : <div>{errors.season}</div>}
        </div>
      </form>

      <h2 className="h2select">Select a country</h2>
      <div className="grid">
        {countries &&
          countries.map((e, index) => {
            return (
              <div key={e.alpha3Code}>
                <input
                  className="selectorcheckbox"
                  onChange={handleOnChange}
                  type="checkbox"
                  id={e.alpha3Code}
                  name={e.name}
                />
                <label className="txtcheckbox">{e.name}</label>
              </div>
            );
          })}
      </div>
      <div className="divbtn">
        {!errors.name &&
        !errors.difficulty &&
        !errors.duration &&
        !errors.season &&
        data.countries ? (
          <Link to="/home" className="link">
            <button className="btnaddact" onClick={handleOnSubmit}>
              ADD ACTIVITY
            </button>
          </Link>
        ) : null}
      </div>
      <ScrollButton />
    </FormStyle>
  );
}

export default Form;
