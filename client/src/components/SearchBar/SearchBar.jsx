import { getCountryDetail } from "../../actions";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../actions";

const SearchBar = ({ keyword, setKeyword }) => {
  const dispatch = useDispatch();
  const filtering = (e) => {};
  function changeSort(e) {
    const arr = e.target.value.split("+");
    console.log(arr);
    dispatch(getAllCountries(arr));
  }
  return (
    <div>
      <input
        key="random1"
        value={keyword}
        placeholder={"search country"}
        onChange={(e) => {
          dispatch(getAllCountries(["ASC", "name"], e.target.value));
          e.preventDefault();
        }}
      />
      <button>BUSCAR</button>

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
