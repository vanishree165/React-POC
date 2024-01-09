import React, { useCallback, useEffect } from "react";
import Sample from "../components/sample/Sample";
import { useDispatch, useSelector } from "react-redux";
import {deleteUser , fetchUsers } from "../../stores/common/users/UserAction";
import HttpErrorResponseModel from "../../models/HttpErrorResponseModel";

const SampleContainer = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const deleteTableUser = useCallback(
    async userID => {
      const data = await dispatch(deleteUser(userID));
      if (!(data instanceof HttpErrorResponseModel)) {
        dispatch(fetchUsers());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <Sample Samplelist={users} deleteTableUser={deleteTableUser}/>;
};

export { SampleContainer };
