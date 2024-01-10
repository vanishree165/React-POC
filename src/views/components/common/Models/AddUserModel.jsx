import React from "react";
import { Modal } from "antd";

const AddUserModal = ({
    show,
    onCancel,
    modalValues,
    closeEditSelectedModel,
    handleModalValuesChange,
    fetchEditUser,
    fetchAddUser
}) => {

    const addNewUserHandler = async () => {
        const newUser = {
            firstName: modalValues.firstName,
            lastName: modalValues.lastName,
            email: modalValues.email,
            phoneNumber: modalValues.phoneNumber,
            qualification: modalValues.qualification,
            comments: modalValues.comments,
            address1: modalValues.address1,
            address2: modalValues.address2,
            country: modalValues.country,
            state: modalValues.state,
            city: modalValues.city,
            zipCode: modalValues.zipCode,
        };

        await fetchAddUser(newUser);
        closeEditSelectedModel();
    };
    return (
        <div className="modal-popup">
            <Modal
                className="edit-modal"
                centered
                open={show}
                onCancel={onCancel}
                footer={null}
                title={modalValues.id ? "Edit User" : "Add User"}
                width={"800px"}
            >
                 <div className="edit-modal-body">
                    <div className="row">
                        <div className="col-md-6 pr-md-5">
                            <div className="form-group my-2">
                                <label htmlFor="firstName">
                                    First Name
                                </label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name"
                                    value={modalValues?.firstName}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="lastName">
                                    Last Name
                                </label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name"
                                    value={modalValues?.lastName}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input type="email" className="form-control" id="email" placeholder="Enter Email Address"
                                    value={modalValues?.email}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input type="number" className="form-control" id="phoneNumber" placeholder="Enter Phone Number"
                                    value={modalValues?.phoneNumber}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="qualification">
                                    Qualification
                                </label>
                                <input type="text" className="form-control" id="qualification" placeholder="Enter Qualification"
                                    value={modalValues?.qualification}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="comments">
                                    Comments
                                </label>
                                <input type="text" className="form-control" id="comments" placeholder="Enter Comments"
                                    value={modalValues?.comments}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                        </div>
                        <div className="col-md-6 pr-md-5">
                            <div className="form-group my-2">
                                <label htmlFor="address1">
                                    Address Line 1
                                </label>
                                <input type="text" className="form-control" id="address1" placeholder="Enter Address Line 1"
                                    value={modalValues?.address1}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="address2">
                                    Address Line 2
                                </label>
                                <input type="text" className="form-control" id="address2" placeholder="Enter Address Line 2"
                                    value={modalValues?.address2}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="country">
                                    Country
                                </label>
                                <input type="text" className="form-control" id="country" placeholder="Enter Country"
                                    value={modalValues?.country}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="state">
                                    State
                                </label>
                                <input type="text" className="form-control" id="state" placeholder="Enter State"
                                    value={modalValues?.state}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="city">
                                    City
                                </label>
                                <input type="text" className="form-control" id="city" placeholder="Enter City"
                                    value={modalValues?.city}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="zipCode">
                                    ZipCode
                                </label>
                                <input type="text" className="form-control" id="zipCode" placeholder="Enter ZipCode"
                                    value={modalValues?.zipCode}
                                    onChange={handleModalValuesChange}
                                     />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center my-4">
                    <button type="reset"
                        onClick={closeEditSelectedModel}
                        className="btn btn-secondary px-5 py-2 mx-3"
                    >Cancel</button>
                    
                        <button type="submit"
                            onClick={modalValues.id ? fetchEditUser : addNewUserHandler}
                            className="btn btn-primary px-5 py-2 mx-3 bg-blue border-0"
                        >
                            {modalValues.id ? "Save" : "Add"}
                        </button>
                    
                </div>  
               
            </Modal>
        </div>
    );
};


export default AddUserModal;
