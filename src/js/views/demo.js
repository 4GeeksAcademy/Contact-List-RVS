import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<form className="list-group">
				{store.demo.map((item, index) => {
					return (
						<>
							<div className="mb-3">
								<label htmlFor="fullname" className="form-label">
									Nombre Completo
								</label>
								<input
									key={index}
									type="text"
									className="form-control"
									id={item.full_name} />
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									E-mail
								</label>
								<input
									type="email"
									className="form-control"
									id="email"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="phone" className="form-label">
									Teléfono
								</label>
								<input
									type="tel"
									className="form-control"
									id="phone"
									pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="direccion" className="form-label">
									Dirección
								</label>
								<input
									type="text"
									className="form-control"
									id="direccion"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Crear Contacto
							</button>
						</>

						// <li
						// 	key={index}
						// 	className="list-group-item d-flex justify-content-between"
						// 	style={{ background: item.background }}>
						// 	<Link to={"/single/" + index}>
						// 		<span>Link to: {item.title}</span>
						// 	</Link>
						// 	{// Conditional render example
						// 	// Check to see if the background is orange, if so, display the message
						// 	item.background === "orange" ? (
						// 		<p style={{ color: item.initial }}>
						// 			Check store/flux.js scroll to the actions to see the code
						// 		</p>
						// 	) : null}
						// 	<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
						// 		Change Color
						// 	</button>
						// </li>
					);
				})}
			</form>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
