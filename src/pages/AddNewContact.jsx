import { Link } from "react-router-dom";
import { useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";


const estadoInicial = {

    name: "",
    phone: "",
    email: "",
    address: ""
};

const urlBase = "https://playground.4geeks.com/contact"

export const AddNewContact = () => {


    const {store, dispatch} = useGlobalReducer()

    const [infoContacto, setInfoContacto] = useState(estadoInicial);



    const handleOnChange = (event) => {

        setInfoContacto({
            ...infoContacto,
            [event.target.name]: event.target.value
        });
    }


    const addInfo = async (event) => {
        if (event.target.name == "save") {
            try {
                const response = await fetch(`${store.urlBase}/Tatiana/contacts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(infoContacto)
                });
                if (response.ok) {
                    setInfoContacto(estadoInicial);
                }
            } catch (error) {
                console.log(error)
            }

        };
    };

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">Add a new contact</h1>
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input
                                value={infoContacto.name}
                                name="name"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-lg-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                value={infoContacto.email}
                                name="email"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="col-lg-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                value={infoContacto.phone}
                                name="phone"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" />
                        </div>
                    </div>
                    <div className="col-lg-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                value={infoContacto.address}
                                name="address"

                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
                        </div>
                    </div>
                    <Link
                        to="/"
                        type="button"
                        name="save"
                        onClick={addInfo}
                        className="col-12 btn btn-primary text-center">save</Link>
                </div>

                <Link to="/">
                    <span className="primary">or get back to contacts</span>
                </Link>
            </div>
        </div>

    )
};