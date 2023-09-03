import React from "react";
import "../../styles/home.css";
import { useState, useEffect, useContext } from "react";
import { Context } from "./../store/appContext.js";
import { Link } from "react-router-dom";
import logoRvs from "../../img/logorvs.png";


export const Home = () => {

	const { actions, store } = useContext(Context);

	return (
		<>	<div className="d-flex flex-column justify-content-center">

			<div className="">
				<div className="mt-2 text-center ">
					<h1>LISTA DE CONTACTOS</h1>
				</div>
				{
					store.tarjetas.length == 0 && <span> Loading ...</span>
				}
				{
					store.tarjetas.length != 0 &&
					store.tarjetas.map(item => <CardDraw key={item.id} item={item} />)
				}

			</div>
		</div>
		</>

	);
}

export const CardDraw = ({ item }) => {

	return (
		<div className="container">
			<div className="d-flex flex-row justify-content-between card px-2" style={{ width: "80vw" }}>
				<div className="mx-5 d-flex justify-content-between align-items-center">
					<img className="border rounded-circle me-3" style={{ width: "100px", height: "100px" }} src={logoRvs} />
					<div className=" ms-5 d-flex flex-column">
						<h5 className="card-title">{item.full_name}</h5>
						<p><i className="fa-solid fa-location-dot me-3"></i>{item.address}</p>
						<p><i className="fa-solid fa-phone me-3"></i>{item.phone}</p>
						<p><i className="fa-solid fa-envelope me-3"></i>{item.email}</p>
					</div>

				</div>
				<div className="d-flex justify-content-center align-items-center">
					<Link to={"/agregocard/"}>
						<p><i className="me-5 fa-solid fa-pencil"></i></p>
					</Link>
					<p><i className="fa-sharp fa-solid fa-trash"></i></p>
				</div>
			</div>
		</div>
	)
}
