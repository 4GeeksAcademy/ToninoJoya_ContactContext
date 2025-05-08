import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		
		<div className="container">
			<div className="row border mt-3">
				<div className="col-8 mt-3 d-flex justify-content-start">
					<img src={rigoImageUrl} className="img-fluid w-25 rounded-circle p-2" />
					<div className="p-2">
						<h5>Name</h5>
						<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-location-dot"></i>Last updated 3 mins ago</small></p>
						<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-phone-flip"></i>Last updated 3 mins ago</small></p>
						<p className="card-text m-1"><small className="text-body-secondary"><i className="fa-solid fa-envelope"></i>Last updated 3 mins ago</small></p>
					</div>
				</div>
				<div className="col-4 mt-3 d-flex justify-content-end">
					<div className="p-2 mx-3">
					<i className="fa-solid fa-trash-can"></i>
					</div>
					<div className="p-2 mx-3">
					<i className="fa-solid fa-pencil"></i>
					</div>
				</div>
			</div>
		</div>

	);
}; 