import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { Contactos } from "../components/Contactos.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


const urlBase = "https://playground.4geeks.com/contact"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	//hacer funcio para traer lista de contactos. 
	const [listaContactos, SetListaContactos] = useState([])

	const ObtenerListaContactos = async () =>{
		try {
			const response = await fetch(`${urlBase}/agendas/Tatiana`)
			if(response.ok){
				const data = await response.json();
				console.log(`se logro obtener los contactos`, data)
				SetListaContactos(data)
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(()=>{
		ObtenerListaContactos()
	}, [])

	return (
		<>
		<Contactos/>
		<div className="container">
			<div className="row border mt-3 p-2">
				<div className="col-12 col-md-8 mt-3 d-flex  flex-column flex-sm-row align-items-center align-items-sm-start">
					<img src={rigoImageUrl} className="img-fluid w-25 w-sm-25 rounded-circle p-2 mb-3 mb-sm-0 me-sm-3" />
					<div className="p-2">
						<h5>{listaContactos.slug}</h5>
						<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-location-dot"></i>Last updated 3 mins ago</small></p>
						<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-phone-flip"></i>Last updated 3 mins ago</small></p>
						<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-envelope"></i>Last updated 3 mins ago</small></p>
					</div>
				</div>
				<div className="col-4 mt-3 d-flex col-12 col-md-4 mt-3 d-flex justify-content-center justify-content-md-end align-items-start">
					<div className="p-2 mx-3">
					<i className="fa-solid fa-trash-can"></i>
					</div>
					<div className="p-2 mx-3">
					<i className="fa-solid fa-pencil"></i>
					</div>
				</div>
			</div>
		</div>
		</>

	);
}; 