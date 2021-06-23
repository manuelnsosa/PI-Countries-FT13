import { useDispatch } from "react-redux";
import { getAllCountries } from "../../actions";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TopNav } from "./SearchBar.js";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function changeSort(e) {
    const arr = e.target.value.split("+");
    //convierto en array de 2 elems ej ["ASC", "name"] para despachar la action
    //con la request al back
    dispatch(getAllCountries(arr, input));
  }

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInput(value);
    dispatch(getAllCountries(["ASC", "name"], input));
  };

  const handleOnSubmit = (e) => {
    console.log(input);
    e.preventDefault();
    dispatch(getAllCountries(["ASC", "name"], input));
    document.querySelector("input").value = "";
    setInput("");
  };

  return (
    <TopNav>
      <div className="nav">
        <form className="form" onSubmit={handleOnSubmit}>
          <input
            className="forms_input"
            name="title"
            onChange={handleOnChange}
            autoComplete="off"
            placeholder={"Seach country"}
          />
          <button className="forms_button" type="submit">
            SEARCH
          </button>
          <Link to="/activities" className="link">
            <button className="forms_button2">CREATE NEW ACTIVITY</button>
          </Link>
          <Link to="/home" onClick={handleOnSubmit} className="link">
            <button className="forms_button2">REFRESH</button>
          </Link>
        </form>
        <select className="select" onChange={(e) => changeSort(e)}>
          <option value="">Sort by...</option>
          <option value="ASC+name">A to Z</option>
          <option value="DESC+name">Z to A</option>
          <option value="ASC+population">Ascending Population</option>
          <option value="DESC+population">Descending Population</option>
        </select>
      </div>
    </TopNav>
  );
};

export default SearchBar;
