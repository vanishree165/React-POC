import React from "react";
import { Modal } from "antd";

const ViewUserModal = ({
    show,
    onCancel,
    modalValues,
}) => {
    return (
        <div className="modal-popup">
            <Modal
                centered
                open={show}
                onCancel={onCancel}
                footer={null}
                title={"View User"}
                width={"800px"}
            >
                <div className="view-modal-body">
                    <div className="row">
                        <div className="col-md-6 pr-md-5">
                            <ul class="list-group ps-0 border border-top-0 border-bottom-0 border-start-0">
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                    First Name
                                    <p class="text-blue fw500">{modalValues?.firstName}</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                    Last Name
                                    <p class="text-blue fw500">{modalValues?.lastName} </p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                    Email Address
                                    <p class="text-blue fw500">{modalValues?.email}</p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                Phone Number
                                    <p class="text-blue fw500">{modalValues?.phoneNumber} </p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                Qualification
                                    <p class="text-blue fw500">{modalValues?.qualification} </p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                                Comments
                                    <p class="text-blue fw500">{modalValues?.comments} </p>
                                </li>
                            </ul>

                            
                           
                           
                           
                        </div>
                        <div className="col-md-6 pr-md-5">
                        <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                        Address Line 1
                                    <p class="text-blue fw500">{modalValues?.address1} </p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                        Address Line 2
                                    <p class="text-blue fw500">{modalValues?.address2} </p>
                                </li>
                           
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                        Country
                                    <p class="text-blue fw500">{modalValues?.country} </p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                        State
                                    <p class="text-blue fw500">{modalValues?.state} </p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                        City
                                    <p class="text-blue fw500">{modalValues?.city} </p>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0">
                        Zipcode
                                    <p class="text-blue fw500">{modalValues?.zipcode} </p>
                                </li>
                                </ul>
                           
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};


export default ViewUserModal;
