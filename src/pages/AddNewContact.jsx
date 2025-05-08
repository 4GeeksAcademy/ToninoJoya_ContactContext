import { Link } from "react-router-dom";





export const AddNewContact = () => {

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-2">Add a New Contact</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
                        </div>
                    </div>
                    <button type="button" class="col-12 btn btn-primary text-center">Primary</button>
                </div>
            </div>

            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>

    )
};