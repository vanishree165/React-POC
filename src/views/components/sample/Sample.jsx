import React, { useState, useCallback, useEffect } from "react";
import AddUserModal from "../common/Models/AddUserModel";
import { useDispatch } from "react-redux";
import HttpErrorResponseModel from "../../../models/HttpErrorResponseModel";
import { editUser, fetchUsers, addUser } from "stores/common/users/UserAction";
import DeleteModal from "../common/Models/DeleteModel";

const Sample = ({ Samplelist, deleteTableUser }) => {
  const [showAddModel, setshowAddModel] = useState(false);
  const [modalValues, setModalValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    qualification: '',
    comments: '',
  });
  const [userID, setUserID] = useState("");
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const dispatch = useDispatch();
  const [userArray, setUserArray] = useState([]);

  const toggleAddSelectedModel = useCallback(
    (user) => {
      if (Object.keys(user).length > 0) {
        let editedValues = {};
        Object.keys(user).map(key => (editedValues[key] = user[key]));
        setModalValues(editedValues);
      }

      setshowAddModel(!showAddModel);
    }, [showAddModel]
  );

  const toggleDeleteSelectedModel = useCallback(
    id => {
      setUserID(id);
      setShowDeleteModel(!showDeleteModel);
    },
    [showDeleteModel]
  );

  const closeAddSelectedModel = useCallback(() => {
    setshowAddModel(false);
  }, []);

  const handleModalValuesChange = useCallback(
    ({ target }, isArray = false) => {
      let values = { ...modalValues };
      if (isArray) {
        let newArray = target.value.split(",");
        values[target.id] = newArray;
      } else {
        values[target.id] = target.value;
      }
      setModalValues(values);
    },
    [modalValues]
  );


  const fetchEditUser = useCallback(async () => {
    let newValues = { ...modalValues };
    const data = await dispatch(editUser(newValues));
    if (!(data instanceof HttpErrorResponseModel)) {
      setshowAddModel(false);
      dispatch(fetchUsers());
    }
  }, [dispatch, modalValues]);


  const addNewUserHandler = useCallback(
    async () => {
      const newUserData = {
        firstName: modalValues.firstName,
        lastName: modalValues.lastName,
        email: modalValues.email,
        phoneNumber: modalValues.phoneNumber,
        address1: modalValues.address1,
        address2: modalValues.address2,
        city: modalValues.city,
        state: modalValues.state,
        zipCode: modalValues.zipCode,
        country: modalValues.country,
        qualification: modalValues.qualification,
        comments: modalValues.comments
      };

      const data = await dispatch(addUser(newUserData));
      if (!(data instanceof HttpErrorResponseModel)) {
        dispatch(fetchUsers());
      }

    },
    [dispatch, modalValues]
  );


  useEffect(() => {
    setUserArray(Samplelist.users.map(obj => obj.users));
  }, [Samplelist.users]);


  return <div>
    <div className="container pt-3">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-600 fs20">Manage Users</h1>
        <button className="btn btn-secondary" onClick={() => toggleAddSelectedModel({})}>
          <em className="fa fa-plus me-2"></em>Add User</button>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col" className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {userArray ? userArray?.map((user, index) => (
            <tr key={user.id} >
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.address1 + ' , ' + user.address2 + ' , ' + user.country + ' , ' + user.state + ' , ' + user.city + ' - ' + user.zipCode}</td>
              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="border-0 c-pointer bg-transparent mx-1 fs18"
                    onClick={() => toggleAddSelectedModel(user)}>
                    <em className="fa fa-edit"></em>
                  </button>
                  <button className="border-0 c-pointer bg-transparent mx-1 fs18"
                    onClick={() => toggleDeleteSelectedModel(user.id)}>
                    <em className="fa fa-trash"></em>
                  </button>
                </div>
              </td>
            </tr>
          )) : <tr>
            <td colSpan={7}>
              <p className="text-center fw-600 my-5">No Data Found</p></td>
          </tr>}
        </tbody>
      </table>
      <AddUserModal
        show={showAddModel}
        onCancel={closeAddSelectedModel}
        modalValues={modalValues ? modalValues : ""}
        handleModalValuesChange={handleModalValuesChange}
        closeEditSelectedModel={closeAddSelectedModel}
        fetchEditUser={fetchEditUser}
        fetchAddUser={addNewUserHandler}
      />
      <DeleteModal
        show={showDeleteModel}
        onCancel={toggleDeleteSelectedModel}
        deleteTableUser={deleteTableUser}
        userId={userID}
      />
    </div>
  </div>;
};

export default Sample;
