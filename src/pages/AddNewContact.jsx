import { Link } from "react-router-dom";
import { useState} from "react";


const EstadoInicial = {

    name: "",
    phone: "",
    email: "",
    address: ""
};

const urlBase = "https://playground.4geeks.com/contact"

export const AddNewContact = () => {

    const [infoContacto, setInfoContacto] = useState(EstadoInicial);

    const [contacto, setContacto] = useState([]);



    const handleOnChange = (event) => {

        setInfoContacto({
            ...infoContacto,
            [event.target.name]: event.target.value
        });
    }

    const CrearAgendaContacto = async () => {

        if(!infoContacto.name ?? infoContacto.name.trim()==" "){
            console.log("Este campo es requerido")
            return null
        }

        try {
            const response = await fetch(`${urlBase}/agendas/${infoContacto.name}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
               const agendaCreadaEnApi = await response.json();
                console.log("se creo el usuario correctamente:",agendaCreadaEnApi)
                return agendaCreadaEnApi
            }
        } catch (error) {
            console.log(error)
        }
    }

    const addInfo = async (event) => {
        if (event.target.name == "save") {
            try {
                const response = await fetch(`${urlBase}/agendas/${infoContacto.name}/contacts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(infoContacto)
                });

                if (response.ok) {
                    setContacto([
                        ...contacto,
                        infoContacto
                    ]);
                    setInfoContacto(EstadoInicial);
                } if (response.status == 404) {
                    console.log("crear el usuario")
                    CrearAgendaContacto()
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
                    <button
                        type="button"
                        name="save"
                        onClick={addInfo}
                        className="col-12 btn btn-primary text-center">save</button>
                </div>

                <Link to="/">
                    <span className="primary">or get back to contacts</span>
                </Link>
            </div>
        </div>

    )
};