import { useDispatch } from "react-redux";
import { getAllCountries } from "../../actions";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ keyword, setKeyword }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  function changeSort(e) {
    const arr = e.target.value.split("+");
    console.log(arr);
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
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          name="title"
          onChange={handleOnChange}
          autoComplete="off"
          placeholder={"Seach country"}
        />
        <button type="submit">SEARCH</button>
        <Link to="/activities" className="link">
          <button onClick={console.log("entré a activities")}>
            CREATE NEW ACTIVITY
          </button>
        </Link>
      </form>
      <select onChange={(e) => changeSort(e)}>
        <option value="">Sort by...</option>
        <option value="ASC+name">A to Z</option>
        <option value="DESC+name">Z to A</option>
        <option value="ASC+population">Ascending Population</option>
        <option value="DESC+population">Descending Population</option>
      </select>
    </div>
  );
};

export default SearchBar;
