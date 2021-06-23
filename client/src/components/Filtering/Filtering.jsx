import React from "react";
import { FilterStyle } from "./Filter.js";
import { useSelector } from "react-redux";

export function Filter({ selector }) {
  const countries = useSelector((store) => store.countries);

  const filters = {
    continents: [],
    activities: [],
  };
  countries.forEach((e) => {
    if (e.region && !filters.continents.includes(e.region)) {
      if (e.region !== "") {
        filters.continents.push(e.region);
      }
    }
    if (e.activities) {
      e.activities.forEach((e) => {
        if (!filters.activities.includes(e.name)) {
          filters.activities.push(e.name);
        }
      });
    }
  });
  let activities = filters.activities;
  let regions = filters.continents;
  if (activities) {
    return (
      <FilterStyle>
        <select
          className="select"
          id="continents"
          onChange={(e) => selector(e, "continent")}
        >
          <option value="nada">Choose a continent</option>
          {regions &&
            regions.map((e, index) => {
              return (
                <option key={index} value={e}>
                  {e}
                </option>
              );
            })}
        </select>
        <select
          className="select"
          id="activities"
          onChange={(e) => selector(e, "activity")}
        >
          <option value="nada">Choose an activity</option>
          {activities &&
            activities.map((e, index) => {
              return (
                <option key={index} value={e}>
                  {e}
                </option>
              );
            })}
        </select>
        <button
          className="btn"
          value=""
          onClick={() => selector({ target: { value: "" } }, "apply")}
        >
          APPLY
        </button>
        <button
          className="btn"
          value=""
          onClick={() => selector({ target: { value: "" } }, "delete")}
        >
          DELETE FILTERS
        </button>
      </FilterStyle>
    );
  }
}

export default Filter;
