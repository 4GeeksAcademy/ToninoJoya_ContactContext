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






    const fetchContactos = async () => {
        try {
            const response = await fetch(`${urlBase}/agendas/${slug}`);
            console.log("fetchContactos: Respuesta recibida", response);//Puede ser 200  o 400
            const data = await response.json();// Traducimos datos
            console.log("fetchContactos: Datos recibidos y traducidos", data);
            if(response.ok){
                setContacto(data)
            }
            if (respuesta.status == 404){
                console.log("crear el usuario")
                createContact();
            }

        } catch (error) {
            console.error(error);

        }
    };

    useEffect(() => {
        fetchContactos()
    }, [])

    const createContact = async (slug) =>{
        try {
            const response = await fetch(`${urlBase}/agendas/${slug}`, {
                method: "POST"
            })
            console.log(response)
            
        } catch (error) {
           console.log(error) 
        }
    }

    const handleOnChange = (event) => {

        console.log({ [event.target.name]: event.target.value })
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        });
    }

    const addInfo = async (event) => {
        if (event.target.name == "save") {
            try {
                const response = await fetch(`${urlBase}/agendas/tonino/contacts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                if (response.ok) {
                    fetchContactos()
                    setContacto([
                        ...contacto,
                        info
                    ]);
                }
            } catch (error) {
                console.log(error)
            }
            console.log("Contacto añadido:", info);
            console.log("Lista de contactos actualizada:", [...contacto, info]);
        };
    };

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">Add a new contact</h1>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="email"
                                name="name"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email"
                                name="email"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="email"
                                name="phone"
                                onChange={handleOnChange}
                                className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" />
                        </div>
                    </div>
                    <div className="col-12 p-0">
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="email"
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
                <button
                        type="button"
                        name="save"
                        onClick={createContact}
                        className="col-12 btn btn-primary text-center">save</button>
               
                <Link to="/">
                    <span className="primary">or get back to contacts</span>
                </Link>
            </div>
        </div>

    )
};