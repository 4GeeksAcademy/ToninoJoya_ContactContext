import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar">
			<div className="container">
				<div to="/">
					<span className="navbar-brand mb-0 h1"></span>
				</div>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-success">Add New contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};