import React from "react";

export function Filter({ regions, activities = ["none"], selector }) {
  if (activities) {
    return (
      <div>
        <select id="continents" onChange={(e) => selector(e, "continent")}>
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
        <select id="activities" onChange={(e) => selector(e, "activity")}>
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
          value=""
          onClick={() => selector({ target: { value: "" } }, "apply")}
        >
          Apply
        </button>
        <button
          value=""
          onClick={() => selector({ target: { value: "" } }, "delete")}
        >
          Delete filters
        </button>
      </div>
    );
  }
}

export default Filter;
