import axios from "axios";
export const GET_BY_CODE = "GET_BY_CODE";
export const GET_ALL = "GET_ALL";
export const POST_ACTIVITY = "POST_ACTIVITY";

export function getAllCountries(e = [], name = "") {
  return function (dispatch) {
    if (e) {
      return axios
        .get(
          `http://localhost:3001/countries?name=${name}&order=${e[0]}&category=${e[1]}`
        )
        .then((json) => {
          dispatch({ type: GET_ALL, payload: json.data });
        });
    } else {
      return axios
        .get(`http://localhost:3001/countries?order=ASC&category=name`)
        .then((json) => {
          dispatch({ type: GET_ALL, payload: json.data });
        });
    }
  };
}

export function getCountryDetail(code) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/countries/${code}`).then((json) => {
      dispatch({ type: GET_BY_CODE, payload: json.data });
    });
  };
}

export function addActivity(data) {
  return function (dispatch) {
    return axios.post("http://localhost:3001/activity", {}).then((json) => {
      dispatch({ type: POST_ACTIVITY, payload: json });
    });
  };
}
