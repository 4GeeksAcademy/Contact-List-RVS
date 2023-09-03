import React from "react";
import { Link } from "react-router-dom";
import logoRvs from "../../img/logorvs.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="ms-5" style={{ width: "100px", height: "50px" }} src={logoRvs} />
			</Link>
			<div className="ml-auto">
				<Link to="/agregocard">
					<button className="me-5 btn btn-primary">Agregar Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
