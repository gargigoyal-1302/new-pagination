import { GET_API, GET_API_FAILED } from "./ActionType";
const initialState = {
  paginationData: [],
  loading: true,
  error: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        paginationData: state.paginationData.concat(action.payload),
        loading: false,
      };
    case GET_API_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      defaut: return state;
  }
};

export default Reducer;
