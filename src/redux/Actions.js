import { GET_API, GET_API_FAILED } from "./ActionType";
import { getApi } from "../Services";

export const getApiAction = (count) => {
  return async (dispatch) => {
    await getApi(count)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_API,
          payload: response?.data?.hits,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_API_FAILED,
          payload: error.message,
        });
        return error.message;
      });
  };
};
