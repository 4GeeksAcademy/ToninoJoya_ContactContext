import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Contactos } from "../components/Contactos.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";



const urlBase = "https://playground.4geeks.com/contact"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	//hacer funcio para traer lista de contactos. 
	const [listaContactos, setListaContactos] = useState([])


	 const crearAgendaContacto = async () =>{

        try {
            const response = await fetch(`${store.urlBase}/Tatiana`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
				console.log("Error al crear el usuario")
            }
        } catch (error) {
            console.log(error)
        }
    }




	const obtenerListaContactos = async () => {
		try {
			const response = await fetch(`${store.urlBase}/Tatiana/contacts`)
			if (response.ok) {
				const data = await response.json();
				dispatch({
					type: "SET_CONTACTS",
					payload: data.contacts
				})
				console.log(`se logro obtener los contactos`, data.contacts)
				
			}
			if(response.status == 404){
				crearAgendaContacto()
			}
		} catch (error) {
			console.log(error)
		}
	}

	const borrarEsteContacto = async (idDelContactoABorrar) => {

		try {
			const response = await fetch(`${store.urlBase}/Tatiana/contacts/${idDelContactoABorrar}`, {
				method: "DELETE"
			});

			if (response.ok) { 
				console.log(`el id ${idDelContactoABorrar} borrado exitosamente.`);
				obtenerListaContactos();
			}
		} catch (error) {
			console.error("Error de red al borrar contacto:", error);
		}
	};

	


	useEffect(() => {
		obtenerListaContactos()
	}, [])

	return (
		<>
			<Contactos />
			<div className="container">
				{store.contacts.map((contacto) => {
					return (<div className="row border mt-3 p-2"
						key={contacto.id}>
						<div className="col-12 col-md-8 mt-3 d-flex  flex-column flex-sm-row align-items-center align-items-sm-start">
							<img src={rigoImageUrl} className="img-fluid w-25 w-sm-25 rounded-circle p-2 mb-3 mb-sm-0 me-sm-3" />
							<div className="p-2">
								<h5>{contacto.name}</h5>
								<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-location-dot"></i> {contacto.address}</small></p>
								<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-phone-flip"></i> {contacto.phone} </small></p>
								<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-envelope"></i> {contacto.email}</small></p>
							</div>
						</div>
						<div className="col-4 mt-3 d-flex col-12 col-md-4 mt-3 d-flex justify-content-center justify-content-md-end align-items-start">
							<div className="p-2 mx-3">
								<i className="fa-solid fa-trash-can btn"
									onClick={() => borrarEsteContacto(contacto.id)}
								></i>
							</div>
							<div className="p-2 mx-3">
								<Link to={`edit-contact/${contacto.id}`}><i className="fa-solid fa-pencil text-dark"></i></Link>
							</div>
						</div>
					</div>)
				})}

			</div>
		</>

	);
}; 