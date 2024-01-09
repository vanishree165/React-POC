import HttpErrorResponseModel from "../../../models/HttpErrorResponseModel";
import {
  DELETE_USERS_FINISHED,
  EDIT_USERS_FINISHED,
  FETCH_USERS_FINISHED,
  ADD_USERS_FINISHED
} from "./UserTypes";

const initialState = {
  error: "",
  users: []
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_FINISHED: {
      if (action.payload instanceof HttpErrorResponseModel) {
        return {
          ...state,
          error: action?.payload?.raw?.data?.error?.msg,
          token: ""
        };
      }
      return {
        ...state,
        users: action?.payload
      };
    }

    case ADD_USERS_FINISHED: {
      console.log(action);
      if (action.payload instanceof HttpErrorResponseModel) {
        return {
          ...state,
          error: action?.payload?.raw?.data?.error?.msg,
          token: ""
        };
      }
      return { ...state };
    }
    case DELETE_USERS_FINISHED: {
      console.log(action);
      if (action.payload instanceof HttpErrorResponseModel) {
        return {
          ...state,
          error: action?.payload?.raw?.data?.error?.msg,
          token: ""
        };
      }
      return { ...state };
    }
    case EDIT_USERS_FINISHED: {
      console.log(action);
      if (action.payload instanceof HttpErrorResponseModel) {
        return {
          ...state,
          error: action?.payload?.raw?.data?.error?.msg,
          token: ""
        };
      }
      return { ...state };
    }

    default:
      return state;
  }
};

export default UserReducer;
