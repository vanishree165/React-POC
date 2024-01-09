import ActionUtility from "../../../utilities/ActionUtility";
import UserEffect from "./UserEffect";
import {
  DELETE_USERS,
  EDIT_USERS,
  FETCH_USERS,
  ADD_USERS
} from "./UserTypes";

export const fetchUsers = () => {
  return async dispatch => {
    const data = await ActionUtility.createThunkEffect(
      dispatch,
      FETCH_USERS,
      UserEffect.requestUsersList,
    );
    console.log(data);
  };
};
export const deleteUser = payload => {
  return async dispatch => {
    const data = await ActionUtility.createThunkEffect(
      dispatch,
      DELETE_USERS,
      UserEffect.deleteUser,
      payload
    );
    console.log(data);
    return data;
  };
};
export const editUser = payload => {
  return async dispatch => {
    const data = await ActionUtility.createThunkEffect(
      dispatch,
      EDIT_USERS,
      UserEffect.requestEditUser,
      payload
    );
    console.log(data);
    return data;
  };
};
export const addUser = payload => {
  return async dispatch => {
    const data = await ActionUtility.createThunkEffect(
      dispatch,
      ADD_USERS,
      UserEffect.requestAddUser,
      payload
    );
    console.log(data);
    return data;
  };
};
