import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const EstadoInicial = {

    name: "",
    phone: "",
    email: "",
    address: ""
};

const urlBase = "https://playground.4geeks.com/contact"

export const AddNewContact = () => {

    const [info, setInfo] = useState(EstadoInicial);

    const [contacto, setContacto] = useState([]);

    const [cargando, setCargando] = useState(false);



      useEffect(() => {
    console.log("useEffect: Montando componente y cargando contactos iniciales...");
    const fetchContactos = async () => {
      try {
        const response = await fetch(`${urlBase}/agendas/tonino`);
        console.log("fetchContactos: Respuesta recibida", response);

        const data = await response.json();
        console.log("fetchContactos: Datos recibidos y traducidos", data);
        setContacto(data);

      } catch (error) {
        console.error(error);

      }
    };

    fetchContactos();
  }, []);

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    console.log(`esto es name: ${name} y esto es value: ${value}`)
    
  }

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">Add a new contact</h1>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="email"
                                name="name"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email"
                                name="email"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="email"
                                name="phone"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Address</label>
                            <input type="email"
                                name="address"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
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