import { Link } from "react-router-dom";

export const Contactos = () => {


	return (
		<div className="container">
			<div className="row justify-conteent-end">
				<div className="col-12">
					<div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
						<Link to="/AddNewContact">
							<button className="btn btn-success me-md-2" type="button">Add New Contact</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}; 