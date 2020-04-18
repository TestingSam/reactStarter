import { GET_SOMETHING_FROM_GET_REQUEST } from "./types";
import { POST_SOMETHING_TO_POST_REQUEST } from "./types";
import axios from "axios";

export const getFromGETRequest = () => async (dispatch) => {
  const res = await axios.get("http://127.0.0.1:7860/");
  dispatch({
    type: GET_SOMETHING_FROM_GET_REQUEST,
    payload: res.data,
  });
};

export const postToPOSTRequest = (valueReceived) => async (dispatch) => {
  const res = await axios.post("http://127.0.0.1:7860/setData", {
    dataToPostNodeJs: valueReceived,
  });
  dispatch({
    type: POST_SOMETHING_TO_POST_REQUEST,
    payload: res.data,
  });
};
