import React, { useContext } from "react";
import "../../styles/home.css";
import { Contact } from "../component/Contact";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const contacts = store.contacts;

	if (contacts.length === 0)
		return <h2 className="h2 text-center">No Contacts</h2>;

	return (
		<>
			<div className="container">
				{actions.formatData(contacts).map((contact, index) => (
					<Contact
						full_name={contact.full_name}
						address={contact.address}
						phone={contact.phone}
						email={contact.email}
						id={contact.id}
						key={index + 1}
					/>
				))}
			</div>
			<div style={{ height: "20px" }}></div>
		</>
	);
};

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
