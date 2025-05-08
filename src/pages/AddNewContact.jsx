import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// const urlBase = "https://playground.4geeks.com/contact"

export const AddNewContact = () => {

    // const [info, setInfo] = useState({

    //     name: "",
    //     phone: "",
    //     email: "",
    //     address: ""
    // })


    

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">Add a new contact</h1>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="email"

                                class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email"

                                class="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input type="email"

                                class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Address</label>
                            <input type="email"
                               
                                class="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="col-12 btn btn-primary text-center">save</button>
                </div>
                <Link to="/">
                    <span className="primary">or get back to contacts</span>
                </Link>
            </div>
        </div>

    )
};