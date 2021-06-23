import { GET_ALL, GET_BY_CODE, POST_ACTIVITY } from "../actions/index";

const initialState = {
  countries: [],
  country: {},
  activities: [],
  loaded: true,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      console.log(action.payload);
      return {
        ...state,
        countries: action.payload,
      };

    case GET_BY_CODE:
      return {
        ...state,
        country: action.payload,
      };

    case POST_ACTIVITY:
      return {
        ...state,
        activities: state.activities.concat(action.payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
