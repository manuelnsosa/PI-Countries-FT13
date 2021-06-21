import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import Pagination from "./Pagination.jsx";
import Filter from "./Filtering/Filtering";

export function Home() {
  var countries = useSelector((store) => store.countries);
  const country = useSelector((store) => store.country);
  const [page, setPage] = useState(1);
  const postsInPage = 10;
  const [matched, setMatched] = useState([]);
  let filteredbyActivity = [];
  let filteredbyContinent = [];
  let countriesToRender = matched.length >= 1 ? matched : countries;

  var idexLastPost = page * postsInPage;
  var indexFirstPost = idexLastPost - postsInPage;
  var currentPosts = countriesToRender.slice(indexFirstPost, idexLastPost);

  const paginate = (e) => setPage(e);

  const selector = (algo, name) => {
    let matches = [];
    if (algo.target.value === "nada") {
      if (name === "continent") {
        filteredbyContinent = [];
      }
      if (name === "activity") {
        filteredbyActivity = [];
      }
    }
    if (name === "continent") {
      filteredbyContinent = [];
      let arr = countries.filter((e) => e.region === algo.target.value);
      filteredbyContinent = arr;
      console.log(filteredbyContinent);
    }
    if (name === "activity") {
      filteredbyActivity = [];
      let arr = [];
      countries.forEach((e) => {
        if (e.activities) {
          e.activities.forEach((activity) => {
            if (activity.name === algo.target.value) {
              arr.push(e.name);
            }
          });
        }
      });
      filteredbyActivity = arr;
      console.log(filteredbyActivity);
    }
    if (name === "delete") {
      setMatched([]);
      matches = countries;
      var [selectContinent, selectActivity] = [
        document.getElementById("continents"),
        document.getElementById("activities"),
      ];
      selectContinent.value = "nada";
      selectActivity.value = "nada";
    }
    if (name === "apply") {
      filteredbyContinent &&
        filteredbyContinent.forEach((e) => {
          filteredbyActivity &&
            filteredbyActivity.forEach((act) => {
              if (act === e.name) {
                console.log("entré");
                matches.push(e);
              }
            });
        });

      if (filteredbyActivity.length === 0 && filteredbyContinent.length >= 1) {
        matches = filteredbyContinent;
      }

      if (filteredbyActivity.length >= 1 && filteredbyContinent.length === 0) {
        matches = filteredbyActivity;
      }

      if (matches.length === 0) {
        matches = [{ name: "No country found" }];
      }

      setMatched(matches);
    }
  };

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

  useEffect(() => {
    if (!matched) {
      return;
    }
    if (countriesToRender === countries && matched) {
      countriesToRender = matched;
      //currentPosts = countriesToRender.slice(indexFirstPost, idexLastPost);
    }
  }, [matched, currentPosts, countriesToRender]);

  if (country.name) {
    console.log(country.activities);
    return (
      <div id={country.alpha3Code}>
        <SearchBar />
        <div>
          <h2>{country.name}</h2>
        </div>
      </div>
    );
  }

  return (
    <div key="home">
      <SearchBar />
      <h1>You're in Home component</h1>
      <Filter
        regions={filters.continents}
        activities={filters.activities}
        selector={selector}
      />
      {currentPosts &&
        currentPosts.map((e, index) => {
          return (
            <div key={e.name}>
              <h2>{e.name}</h2>
            </div>
          );
        })}
      <Pagination
        postsInPage={postsInPage}
        totalPosts={countriesToRender.length}
        paginate={paginate}
        page={page}
      />
    </div>
  );
}

export default Home;
