import { GET_SOMETHING_FROM_GET_REQUEST } from "../actions/types";
import { POST_SOMETHING_TO_POST_REQUEST } from "../actions/types";
const initialState = {
  dataFromPostRequest: "",
  dataFromGetRequestArrayType: ["Samir1"],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SOMETHING_FROM_GET_REQUEST:
      return { ...state, dataFromGetRequestArrayType: action.payload };
    case POST_SOMETHING_TO_POST_REQUEST:
      return {
        ...state,
        dataFromPostRequest: action.payload,
      };
    default:
      return state;
  }
}
